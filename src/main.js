import Phaser from "phaser";
//import {loadAllSprites} from "./sprite-loader";

import {RoomLoader} from "./room-loader";

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game-wrapper", {preload: preload, create: create, update: update});

var roomLoader = new RoomLoader();
var currentRoom = null;

function preload() {
    //game.load.atlas("bg3", "img/bg3.png");
    game.load.image("grass", "img/grass.png");
    //game.load.image("spoon", "img/spoon.png");
}

function create() {
    roomLoader.loadAll();
    currentRoom = roomLoader.get("forest-haven-0");
    console.log("Got room: "+currentRoom);
}

function update() {
    if (currentRoom)
	currentRoom.update();
    // else
    // 	console.warn("currentRoom is falsy");
}

;
