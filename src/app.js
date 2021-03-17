const fastify = require("fastify");
const {APP_PORT} = require("./environment");
require('dotenv').config();

const app = require('fastify')({
    logger: true, //aktifkan ini untuk menerima log setiap request dari fastify.
});


app.get("/", async (request, reply) => {
    return {
        hello: "hey yo my name is muhamad ramdan nugraha",
    };
});

app.register(require("./routes/api"), {
    prefix: "api",
});

const start = async () => {
    try {
        await app.listen(APP_PORT);
        app.log.info(`server listening on ${app.server.address().port}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
