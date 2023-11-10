require("dotenv").config();

const Hapi = require("@hapi/hapi");
const music = require("./api/music");
const MusicService = require("./services/inMemory/MusicService");

const init = async () => {
    const musicService = new MusicService();

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ["*"]
            }
        }
    });

    await server.register({
        plugin: music,
        options: {
            service: musicService
        }
    });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
