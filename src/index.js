const Fastify = require('fastify')

const fastify = Fastify({
    logger: true
})

fastify.register(require("@fastify/mysql"), {
    connectionString: "mysql://root:123456789@localhost:3306/api"
})

require("./routes/routes")(fastify);

fastify.listen({port: 3000}, function(error, adress) {
    if(error) {
        console.log(error)
        process.exit(1)
    }
    console.log("Servidor", adress);
})