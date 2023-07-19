const { postRoutes } = require("./postRoutes");
const { userRoutes } = require("./userRoutes");

module.exports = (fastify) => {
    userRoutes(fastify),
    postRoutes(fastify)
}