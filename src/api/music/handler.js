class MusicHandler {
    constructor(service) {
        this.service = service;

        this.insertMusicHandler = this.insertMusicHandler.bind(this);
    }

    async insertMusicHandler(request, h) {
        try {
            const { name, year } = request.payload;
            const musicId = await this.service.insertMusic({ name, year });

            console.log(musicId);

            const response = h.response({
                status: "success",
                message: "New music added successfully",
                data: {
                    musicId
                }
            });

            response.code(201);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = MusicHandler;
