exports.postRoutes = (fastify) => {
  fastify.get("/posts", function (resquest, reply) {
    fastify.mysql.query("SELECT * FROM posts", function (error, results) {
      reply.send(error || results);
    });
  });

  fastify.get("/posts/:id", function (request, reply) {
    fastify.mysql.query(
      `SELECT * FROM posts where posts.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.post("/posts", function (request, reply) {
    fastify.mysql.query(
      `INSERT INTO posts (title, body, userId) VALUES ('${request.body.title}', '${request.body.body}', ${Number (request.body.userId)})`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.put("/posts/:id", function (request, reply) {
    fastify.mysql.query(
      `UPDATE posts SET title = '${request.body.title}', body = '${
        request.body.body}' where posts.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });

  fastify.delete("/posts/:id", function (request, reply) {
    fastify.mysql.query(
      `DELETE FROM posts WHERE posts.id = ${Number(request.params.id)}`,
      function onResult(error, results) {
        reply.send(error || results);
      }
    );
  });
};
