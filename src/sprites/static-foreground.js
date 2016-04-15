import {Sprite} from "../sprite-wrapper";
import {constants} from "../constants";

export class StaticForeground extends Sprite {

    constructor(type, x, y) {
	super(type, x*constants.tileW, y*constants.tileH);
    }

    update() {}
};
