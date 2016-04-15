import {Sprite} from "../sprite-wrapper";

export class Player extends Sprite {
    constructor(x, y) {
	super("link", x, y);
    }

    update(game) {
	let cursors = game.input.keyboard.createCursorKeys();
	let speed = 3;
	
	if (cursors.left.isDown) {
	    this.x -= speed;
	}
	if (cursors.right.isDown) {
	    this.x += speed;
	}
	if (cursors.up.isDown) {
	    this.y -= speed;
	}
	if (cursors.down.isDown) {
	    this.y += speed;
	}
    }
};
