import {Room} from "../room";

import {Background} from "../sprites/background";
import {StaticForeground} from "../sprites/static-foreground";

var room = new Room("forest-haven-0");

room.setSprites([
    new Background("background-grass"),
    //new StaticForeground("tree", 0, 0),
    new StaticForeground("grass-tuft", 3, 4),
    new StaticForeground("grass-tuft", 7, 12),
    new StaticForeground("grass-tuft", 20, 7),
    new StaticForeground("shrub", 12, 5),
    new StaticForeground("shrub", 13, 6),
    new StaticForeground("shrub", 13, 7),
    new StaticForeground("stump", 10, 9),
    new StaticForeground("grass-tall", 10, 12),
    new StaticForeground("grass-tall", 11, 12),
    new StaticForeground("grass-tall", 12, 12),
    new StaticForeground("tree", 18, 12),
]);

module.exports = room;
