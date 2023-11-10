require("dotenv").config();

const Hapi = require("@hapi/hapi");

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
        routes: {
            cors: {
                origin: ["*"]
            }
        }
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello World!";
        }
    });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
