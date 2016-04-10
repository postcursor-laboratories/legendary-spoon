/**
 * Sort of in charge of every sprite image and stuff. No big deal.
 */
import {Spoon} from "./sprites/spoon.js";

/**
 * Loads all of the sprites into the given Phaser game.
 * @param game - a Phaser.Game instance
 * @return Array - a list of all sprites initialized
 */
export function loadAllSprites(game) {
    let sprites = [];
    for (let i = 0; i < 25; i++) {
        let spoon = new Spoon(Math.random() * 800, Math.random() * 600);
        spoon.rotationAmount = Math.random() > 0.5 ? -1 : 1;

        let pSprite = spoon.initialize(game);
        pSprite.anchor.setTo(0.5, 0.5);
        pSprite.tint = 0xe5f53b; //sorta gold
        pSprite.angle = Math.random() * 360;

        sprites.push(spoon);
    }
    return sprites;
}
