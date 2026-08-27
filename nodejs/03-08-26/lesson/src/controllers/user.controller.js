import { db } from "../utils/db.js";

export function createUser(req, res) {
  const { url, method } = req;
  let statusCode = 200;
  let responseBody = null;
  let urlParts = url.split("/");

  const bodyParts = [];
  req.on("data", (chunk) => {
    bodyParts.push(chunk);
  });

  req.on("end", () => {
    const content = Buffer.concat(bodyParts).toString();
    const body = JSON.parse(content);

    const statement = db.prepare(
      `INSERT INTO users (name, age, country) VALUES (?,?,?)`,
    );

    const result = statement.run(body.name, body.age, body.country);

    const user = db
      .prepare("SELECT * FROM users WHERE id = ?")
      .get(result.lastInsertRowid);

    responseBody = user;
    statusCode = 201;

    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseBody));
  });
}

//BUSCAR O UTILIZADOR COM SQL
export function findUsers(req, res) {
  const users = db.prepare("SELECT * FROM users").all();

  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(users));
}

export function findUserById(req, res) {
  const id = Number(req.url.split("/").at(-1));
  const user = db.users.find((user) => user.id === id);
  let statusCode = 200;
  let responseBody = null;

  if (user) {
    responseBody = user;
  } else {
    responseBody = { message: `User with ${id} was not found` };
    statusCode = 404;
  }
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseBody));
}

//UPDATE
export function updateUser(req, res) {
  const id = Number(req.url.split("/").at(-1));
  let responseBody = null;

  const bodyParts = [];

  req.on("data", (chunk) => {
    bodyParts.push(chunk);
  });

  req.on("end", () => {
    const content = Buffer.concat(bodyParts).toString();

    const body = JSON.parse(content);

    const user = db.users.find((user) => user.id === id);

    if (!user) {
      responseBody = {
        message: "Usuário não encontrado",
      };

      let statusCode = 404;

      res.writeHead(statusCode, {
        "Content-Type": "application/json",
      });

      res.end(JSON.stringify(responseBody));

      return;
    }

    Object.assign(user, body);

    let responseBody = user;
    let statusCode = 200;

    res.writeHead(statusCode, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(responseBody));
  });

  return;
}

//E DELETE
export function deleteUser(req, res) {
  const id = Number(req.url.split("/").at(-1));

  db.users = db.users.filter((user) => user.id !== id);

  let statusCode = 204;
  let responseBody = undefined;

  res.writeHead(statusCode);
  res.end();

  return;
}
