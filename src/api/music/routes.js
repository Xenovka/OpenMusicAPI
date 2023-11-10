const routes = (handler) => [
    {
        method: "POST",
        path: "/music",
        handler: handler.insertMusicHandler
    }
];

module.exports = routes;
