/**
 * A wrapper around a Phaser sprite. Essentially just a little interfacing.
 */
export class Sprite {

    constructor(image, x, y) {
        this.__unconstructedData = {
            image: image,
            x: x,
            y: y
        };
        this.__gameSprite = undefined;
        this.gameRef = undefined;
    }

    initialize(game) {
        let data = this.__unconstructedData;
        this.__unconstructedData = undefined;
        this.gameRef = game;
        return this.__gameSprite = game.add.sprite(data.x, data.y, data.image);
    }

    set x(x) {
        (this.__unconstructedData || this.__gameSprite).x = x;
    }

    get x() {
        return (this.__unconstructedData || this.__gameSprite).x;
    }

    set y(y) {
        (this.__unconstructedData || this.__gameSprite).y = y;
    }

    get y() {
        return (this.__unconstructedData || this.__gameSprite).y;
    }

    get sprite() {
        if (this.__gameSprite) {
            return this.__gameSprite;
        }
        throw "game sprite not initialized";
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    update() {
    }

}
