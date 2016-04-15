import {Room} from "../room";

import {StaticForeground} from "../sprites/static-foreground";

var room = new Room("forest-haven-0");

room.setSprites([new StaticForeground("tree", 4, 4)]);

room.setRenderer(function(game) {
    game.add.text(400, 400, "legezELDA", "");
});

module.exports = room;
