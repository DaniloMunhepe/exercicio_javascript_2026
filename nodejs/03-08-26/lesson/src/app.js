import http from 'http';
import {
  createUser,
  findUserById,
  findUsers,
} from './controllers/user.controller.js';
import { db } from './utils/db.js';

const server = http.createServer((req, res) => {
  // const url = req.url
  // const method = req.method
  const { url, method } = req;
  let statusCode = 200;
  let responseBody = null;
  let urlParts = url.split('/');

  switch (req.method) {
    case 'POST':
      if (url === '/api/users') return createUser(req, res);
    case 'GET':
      if (url === '/api/users') {
        return findUsers(req, res);
      } else if (urlParts.length > 3) {
        return findUserById(req, res);
      }
      break;
    case 'PATCH':
      // 1. Ler o id de forma dinamica na url
      // 2. Encontrar um object dentro de um array, .find()
      // 3. Como modificar um objecto dentro de um array

      // 200 - retornar o dados actualizado
      if (urlParts[1] === 'api' && urlParts[2] === 'users') {
        const id = Number(urlParts[3]);

        const bodyParts = [];

        req.on('data', (chunk) => {
          bodyParts.push(chunk);
        });

        req.on('end', () => {
          const content = Buffer.concat(bodyParts).toString();

          const body = JSON.parse(content);

          const user = db.users.find((user) => user.id === id);

          if (!user) {
            responseBody = {
              message: 'Usuário não encontrado',
            };

            statusCode = 404;

            res.writeHead(statusCode, {
              'Content-Type': 'application/json',
            });

            res.end(JSON.stringify(responseBody));

            return;
          }

          Object.assign(user, body);

          responseBody = user;
          statusCode = 200;

          res.writeHead(statusCode, {
            'Content-Type': 'application/json',
          });

          res.end(JSON.stringify(responseBody));
        });

        return;
      }
      break;

    case 'DELETE':
      // 1. Ler o id de forma dinamica na url
      // 2. Remover um object de um array, filter()

      // 204 - retornar undefined

      if (urlParts[1] === 'api' && urlParts[2] === 'users') {
        const id = Number(urlParts[3]);

        db.users = db.users.filter((user) => user.id !== id);

        statusCode = 204;
        responseBody = undefined;

        res.writeHead(statusCode);
        res.end();

        return;
      }
      break;
    default:
  }

  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
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

/**
 * Mover a funcionalidade de atualizar e deletar usuario para o user controller
 * Criar um controller para posts que faz CRUD
 * SQLite
 */
