import Phaser from "phaser";
import {loadAllSprites} from "./sprite-loader";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("spoon", "img/spoon.png");
}
let sprites = [];
function create() {
    sprites = loadAllSprites(game);
}

function update() {
    for (let sprite of sprites) {
        sprite.update();
    }
}
