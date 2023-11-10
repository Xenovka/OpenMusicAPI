const { nanoid } = require("nanoid");

class MusicService {
    constructor() {
        this.notes = [];
    }

    insertMusic({ name, year }) {
        const id = nanoid(16);
        const newMusic = { id, name, year };

        this.notes.push(newMusic);

        return id;
    }
}

module.exports = MusicService;
