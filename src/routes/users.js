exports.usersRoutes = (fastify) => {
    fastify.get("/users", function (resquest, reply) {
      fastify.mysql.query("SELECT * FROM users", function (error, results) {
        reply.send(error || results);
      });
    });
  
    fastify.get("/users/:id", function (request, reply) {
      fastify.mysql.query(
        `SELECT * FROM users where users.id = ${Number(request.params.id)}`,
        function onResult(error, results) {
          reply.send(error || results);
        }
      );
    });
  
    fastify.post("/users", function (request, reply) {
      fastify.mysql.query(
        `INSERT INTO users (name, email, password) VALUES ('${request.body.name}', '${request.body.name}', '${request.body.name}')`,
        function onResult(error, results) {
          reply.send(error || results);
        }
      );
    });
  
    fastify.put("/users/:id", function (request, reply) {
      fastify.mysql.query(
        `UPDATE users SET name = '${request.body.name}', email = '${request.body.email}', password='${request.body.password}' where users.id=${Number(request.params.id)}`,
        function onResult(error, results) {
          reply.send(error || results);
        }
      );
    });
  
    fastify.delete("/users/:id", function (request, reply) {
      fastify.mysql.query(
        `DELETE FROM users WHERE users.id = ${Number(request.params.id)}`,
        function onResult(error, results) {
          reply.send(error || results);
        }
      );
    });
  };
  