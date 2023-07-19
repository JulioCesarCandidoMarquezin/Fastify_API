exports.productsRoutes = (fastify) => {
  fastify.get("/products", function (resquest, reply) {
    fastify.mysql.query("SELECT * FROM products", function (error, results) {
      reply.send(error || results);
    });
  });

  fastify.get("/products/:id", function (request, reply) {
    fastify.mysql.query(
      `SELECT * FROM products where products.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.post("/products", function (request, reply) {
    fastify.mysql.query(
      `INSERT INTO products (name, price) VALUES ('${request.body.name}', ${request.body.price})`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.put("/products/:id", function (request, reply) {
    fastify.mysql.query(
      `UPDATE products SET name = '${request.body.name}', price = '${
        request.body.price
      }' where products.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.delete("/products/:id", function (request, reply) {
    fastify.mysql.query(
      `DELETE FROM products WHERE products.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });
};
