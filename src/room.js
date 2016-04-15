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
	for (let sprite of this._sprites) {
	    sprite.initialize(game);
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

    update() {
	for (let sprite of this._sprites) {
	    sprite.update();
	}
    }
};
