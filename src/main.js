import Phaser from "phaser";
import {RoomLoader} from "./room-loader";
import {Player} from "./sprites/player";
import {constants} from "./constants";

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game-wrapper", {preload: preload, create: create, update: update});

var roomLoader = new RoomLoader();
var player = new Player(10*constants.tileW, 10*constants.tileH);
var currentRoom = null;

function preload() {
    // TODO automate image loading; potentially have gulpfile generate list for us?
    let images = ["grass-tuft", "grass-tall", "shrub", "stump", "tree", "background-grass", "link"];
    for (let image of images) {
	game.load.image(image, "img/"+image+".png");
    }
}

function create() {
    roomLoader.loadAll();
    currentRoom = roomLoader.get("forest-haven-0");
    console.log("Got room: "+currentRoom);

    currentRoom.render(game);
    player.initialize(game);
}

function update() {
    if (currentRoom)
	currentRoom.update();
    // else
    // 	console.warn("currentRoom is falsy");

    player.update(game);
}

;
