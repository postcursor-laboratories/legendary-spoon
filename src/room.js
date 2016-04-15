/**
 * Represents a room. Rooms are 80x60 (SNES games are intended to be played with an aspect ratio of 4:3)
 */
export class Room {

    /**
     * Given a (JSON) room specification, create a Room object
     * @param identifier - the name of the room
     * @return Room
     */
    constructor(identifier, sprites) {
	this._ident = identifier;
	this._sprites = [];
    }

    render(game) {
	this._render(game);
	for (let sprite of this._sprites) {
	    game.add(sprite);
	}
    }

    get identifier() {
	return this._ident;
    }

    toString() {
	return '[Room '+this.identifier+']';
    }
    
    /**
     * @param sprites - an array of sprites in this room
     */
    setSprites(sprites) {
	this._sprites = sprites;
    }
    
    /**
     * For adding arbitrary rendering before rendering the sprites. Will probably be used
     * for backgrounds.
     * @param render - function(game) {...} that adds this room to the game
     */
    setRenderer(render) {
	this._render = render;
    }

    update() {
	for (let sprite of this._sprites) {
	    sprite.update();
	}
    }
};
