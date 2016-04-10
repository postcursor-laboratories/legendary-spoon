import Phaser from "phaser";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("spoon", "img/spoon.png");
}
let sprites = [];
function create() {
    for (let i = 0; i < 25; i++) {
        let sprite = game.add.sprite(Math.random() * 800, Math.random() * 600, "spoon");
        sprite.anchor.setTo(0.5, 0.5);
        sprite.tint = 0xe5f53b; //sorta gold
        sprite.rotationAmount = Math.random() > 0.5 ? -1 : 1;
        sprite.angle = Math.random() * 360;
        sprites.push(sprite);
    }
}

function update() {
    for (let sprite of sprites) {
        sprite.angle += sprite.rotationAmount;
    }
}
