import Phaser from "phaser";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("spoon", "img/spoon.png");
}
let sprite;
function create() {
    sprite = game.add.sprite(200, 200, "spoon");
    sprite.scale.setTo(0.2, 0.2);
    sprite.anchor.setTo(0.5, 0.5);
    sprite.tint = 0xe5f53b; //sorta gold
}

function update() {
    sprite.angle += 1;
}
