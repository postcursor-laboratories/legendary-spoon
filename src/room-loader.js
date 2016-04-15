/**
 * Loads all of the room objects.
 */

import {Room} from "./room";

export class RoomLoader {

    constructor() {
	this._rooms = [];
    }

    /**
     * Loads all rooms in ./rooms
     */
    loadAll() {
	let rooms = require("./rooms/*.js", { mode: 'list' });
	for (let i of rooms) {
	    console.log("room-loader: adding room "+i.module);
	    this.add(i.module);
	}
    }
    
    /**
     * Adds a room. This should only be called from room definition files.
     * @param room - The room to load.
     * @return Room - The loaded room.
     */
    add(room) {
	this._rooms[room.identifier] = room;
	return room;
    }
    
    get(identifier) {
	return this._rooms[identifier];
    }
};
