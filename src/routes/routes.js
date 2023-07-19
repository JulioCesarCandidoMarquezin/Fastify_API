const { postsRoutes } = require("./posts");
const { usersRoutes } = require("./users");

module.exports = (fastify) => {
    usersRoutes(fastify),
    postsRoutes(fastify)
}