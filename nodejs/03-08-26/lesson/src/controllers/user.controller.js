import { db } from '../utils/db.js';

export function createUser(req, res) {
  const { url, method } = req;
  let statusCode = 200;
  let responseBody = null;
  let urlParts = url.split('/');

  const bodyParts = [];
  req.on('data', (chunk) => {
    bodyParts.push(chunk);
  });

  req.on('end', () => {
    const content = Buffer.concat(bodyParts).toString();
    const body = JSON.parse(content);
    const user = {
      ...body,
      id: db.users.length + 1,
    };

    db.users.push(user);
    responseBody = user;
    statusCode = 201;

    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseBody));
  });
}

export function findUsers(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db.users));
}

export function findUserById(req, res) {
  const id = Number(req.url.split('/').at(-1));
  const user = db.users.find((user) => user.id === id);
  let statusCode = 200;
  let responseBody = null;

  if (user) {
    responseBody = user;
  } else {
    responseBody = { message: `User with ${id} was not found` };
    statusCode = 404;
  }
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(responseBody));
}
