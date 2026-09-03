import { db } from "../utils/db.js";

//CRIAR
export function createPosts(req, res) {
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
      `INSERT INTO posts (title, description, publishedAt, userId) VALUES (?,?,?,?)`,
    );

    const result = statement.run(
      body.title,
      body.description,
      body.publishedAt,
      body.userId,
    );

    const post = db
      .prepare("SELECT * FROM posts WHERE id = ?")
      .get(result.lastInsertRowid);

    responseBody = post;
    statusCode = 201;

    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseBody));
  });
}

//BUSCAR O UTILIZADORES/LISTAR TODOS POSTS
export function findPosts(req, res) {
  const posts = db.prepare("SELECT * FROM posts").all();

  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(posts));
}

//BUSCAR PELO ID
export function findPostsById(req, res) {
  const id = Number(req.url.split("/").at(-1));
  const post = db.prepare("SELECT * FROM posts WHERE id = ?").get(id);

  if (!post) {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Post com id ${id} nao foi encontrado`,
      }),
    );

    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(post));
}

//UPDATE
export function updatePosts(req, res) {
  const id = Number(req.url.split("/").at(-1));
  let responseBody = null;

  const bodyParts = [];

  req.on("data", (chunk) => {
    bodyParts.push(chunk);
  });

  req.on("end", () => {
    const content = Buffer.concat(bodyParts).toString();

    const body = JSON.parse(content);

    const post = db.prepare("SELECT * FROM posts WHERE id = ?").get(id);

    if (!post) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "Post não encontrado",
        }),
      );

      return;
    }

    db.prepare(
      `
      UPDATE posts
      SET title = ?, description = ?, publishedAt = ?, userId = ?
      WHERE id = ? `,
    ).run(body.title, body.description, body.publishedAt, body.userId, id);

    const updatedPost = db.prepare("SELECT * FROM posts WHERE id = ?").get(id);

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(updatedPost));
  });
}

//DELETE POSTS
export function deletePosts(req, res) {
  const id = Number(req.url.split("/").at(-1));

  const result = db.prepare("DELETE FROM posts WHERE id = ?").run(id);

  if (result.changes === 0) {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Post não encontrado",
      }),
    );

    return;
  }

  res.writeHead(204);
  res.end();
}
