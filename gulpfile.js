"use strict";

var browserify = require("browserify");
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var fs = require("fs");
var mkdirp = require("mkdirp");
var merge = require("merge");
var dateFormat = require("dateformat");
var path = require("path");

// Eww.
var preludeFilePath = path.resolve("./node_modules/browser-pack/prelude.js");
var preludeText = fs.readFileSync(preludeFilePath, {encoding: "utf8"});

function timelog() {
    var modargs = [dateFormat(new Date(), "[hh:MM:ss]")];
    modargs.push.apply(modargs, arguments);
    console.log.apply(console, modargs);
}

function magicTouchFile(f) {
    var parent = f.substring(0, f.lastIndexOf("/"));
    // Sooooo goood!
    mkdirp.sync(parent);
    fs.closeSync(fs.openSync(f, "w"));
    return f;
}

// Ensure bin exists
mkdirp.sync('./bin/');
var pages = ["main"].map(function (page) {
        return page + ".js";
    }),
    inputs = pages.map(function (page) {
        return "./src/" + page;
    }),
    outputs = pages.map(function (page) {
        return "./bin/" + page;
    });

function commonTransform(customOpts, watch) {
    var defaults = {
        debug: true,
        prelude: preludeText,
        preludePath: "browserify-prelude.js"
    };
    var opts = merge(defaults, customOpts);
    if (watch) {
        console.log("Enabling watchify");
        opts = merge({
            cache: {},
            packageCache: {},
            plugin: [["watchify", {
                poll: true
            }]]
        }, opts);
    }
    console.log("Using options", JSON.stringify(opts, null, 4));
    var b = browserify(inputs, opts);
    console.log("Applying babelify");
    b = b.transform("babelify");
    console.log("Applying browserify-shim");
    // SHIM CONFIG AVAILABLE IN package.json. ONLY $0.33!
    b = b.transform("browserify-shim");
    console.log("Applying factor-bundle");
    b = b.plugin("factor-bundle", {outputs: outputs});
    var doBundle = function doBundle() {
        timelog("Bundling again!");
        return b.bundle()
            //.pipe(showProgress(process.stdout))
            .pipe(fs.createWriteStream(magicTouchFile("bin/common.js")))
            .on("finish", function () {
                timelog("done bundling");
            });
    };
    b.on("update", doBundle);
    b.on("log", function log(msg) {
        timelog(msg);
    });
    b.on("error", function (err) {
        timelog("Browserify error", err.message);
        this.emit("end");
    });
    b.on("transform", function (tr, file) {
        timelog("Applying " + tr.constructor.name + " to " + file);
    });
    return doBundle();
}

gulp.task("transform", function () {
    return commonTransform({}, false);
});
gulp.task("transform-on-my-watch", function () {
    return commonTransform({}, true);
});