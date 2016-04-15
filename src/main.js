import Phaser from "phaser";
//import {loadAllSprites} from "./sprite-loader";

import {RoomLoader} from "./room-loader";

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game-wrapper", {preload: preload, create: create, update: update});

var roomLoader = new RoomLoader();
var currentRoom = null;

function preload() {
    //game.load.atlas("bg3", "img/bg3.png");
    //game.load.image("grass", "img/grass.png");

    // TODO automate image loading
    game.load.image("grass-tuft", "img/grass-tuft.png");
    game.load.image("grass-tall", "img/grass-tall.png");
    game.load.image("shrub", "img/shrub.png");
    game.load.image("stump", "img/stump.png");
    game.load.image("background-grass", "img/background-grass.png");
    //game.load.image("spoon", "img/spoon.png");
}

function create() {
    roomLoader.loadAll();
    currentRoom = roomLoader.get("forest-haven-0");
    console.log("Got room: "+currentRoom);

    currentRoom.render(game);
}

function update() {
    if (currentRoom)
	currentRoom.update();
    // else
    // 	console.warn("currentRoom is falsy");
}

;
