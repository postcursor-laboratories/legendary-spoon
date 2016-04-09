# legendary-spoon
##### What is it?
A JavaScript-based Legend of Zelda clone. We weren't sure what to make, and wanted a project, so I guess we're trying this now? We'll see how it goes.

##### Why's it called that?
Because GitHub recommended that repo name, and it was beautiful.

##### How do I play it?
Well, it doesn't really exist yet, so good luck with that. Maybe once it vaguely exists we'll set up a website to pull from master, and you could play it there.

##### Building
To build legendary-spoon, you need a few things.

First, get `node` and `npm`. Then, run `npm install -g babel-eslint browserify eslint gulp-cli` to get commands you need.
Next, run `npm install` to grab all dependencies you need to build.

Now you are ready to build. `gulp --tasks` will tell you what you can do.

Some common tasks:

|Name|Description|
|----|-----------|
|`site`|Prepare the entire build in `bin`.|
|`transform`|Do a one-time transform from the JS entry file(s) in `src` to `bin`.|
|`transform-on-my-watch`|Do a transform as above, and then watch `src` and re-transform when there's changes.|

For a simple build, you probably want `site`.
