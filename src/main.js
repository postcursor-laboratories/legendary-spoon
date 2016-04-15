import Phaser from "phaser";
import {RoomLoader} from "./room-loader";

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game-wrapper", {preload: preload, create: create, update: update});

var roomLoader = new RoomLoader();
var currentRoom = null;

function preload() {
    // TODO automate image loading; potentially have gulpfile generate list for us?
    let images = ["grass-tuft", "grass-tall", "shrub", "stump", "tree", "background-grass"];
    for (let image of images) {
	game.load.image(image, "img/"+image+".png");
    }
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
