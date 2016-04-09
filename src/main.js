import Phaser from "phaser";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

function preload() {
    game.load.image("spoon", "img/spoon.png");
}
let sprite;
function create() {
    sprite = game.add.sprite(0, 0, "spoon");
    sprite.anchor.setTo(0.5, 0.5);
}

function update() {
    sprite.angle += 1;
}
