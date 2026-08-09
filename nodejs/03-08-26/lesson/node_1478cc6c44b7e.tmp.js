import http from "http";

const db = { users: [], posts: [] };
// name, age, country
// posts: { title, description, published: boolean, userId }

const server = http.createServer((req, res) => {
  // const url = req.url
  // const method = req.method
  const { url, method } = req;
  let statusCode = 200;
  let responseBody = null;
  let urlParts = url.split("/");

  switch (req.method) {
    case "POST":
      if (url === "/api/users") {
        const bodyParts = [];
        req.on("data", (chunk) => {
          bodyParts.push(chunk);
        });

        req.on("end", () => {
          const content = Buffer.concat(bodyParts).toString();
          const body = JSON.parse(content);
          const user = {
            ...body,
            id: db.users.length + 1,
          };

          db.users.push(user);
          responseBody = user;
          statusCode = 201;

          res.writeHead(statusCode, { "Content-Type": "application/json" });
          res.end(JSON.stringify(responseBody));
        });
      }
      return;
    case "GET":
      if (url === "/api/users") {
        responseBody = db.users;
      } else if (urlParts.length > 3) {
        const id = Number(urlParts.at(-1));
        const user = db.users.find((user) => user.id === id);

        if (user) {
          responseBody = user;
        } else {
          responseBody = { message: `User with ${id} was not found` };
          statusCode = 404;
        }
      }
      break;
    case "PATCH":
      // 1. Ler o id de forma dinamica na url
      // 2. Encontrar um object dentro de um array, .find()
      // 3. Como modificar um objecto dentro de um array

      // 200 - retornar o dados actualizado
      break;
    case "DELETE":
      // 1. Ler o id de forma dinamica na url
      // 2. Remover um object de um array, filter()

      // 204 - retornar undefined
      break;
    default:
  }

  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseBody));

  console.log(req.method, req.url);
});

const port = 8000;

server.listen(port, () => {
  console.info(`Server is waiting on http://localhost:${port}`);
});

// GET, POST, PATCH, DELETE

// /api/users

// CRUD - Create, Read, Update, Delete

// POST /api/posts - 201
// GET /api/posts - 200
// GET /api/posts/123 - 200
// PATCH /api/posts/123 - 200
// DELETE /api/posts/123 - 204
