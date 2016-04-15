import {Sprite} from "../sprite-wrapper";

export class Spoon extends Sprite {

    constructor(x, y) {
        super("spoon", x, y);
        this.rotationAmount = 1;
    }

    update() {
        this.sprite.angle += this.rotationAmount;
    }

};
