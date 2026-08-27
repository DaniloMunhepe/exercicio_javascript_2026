# Exercícios — Posts, JOIN e SQL

Baseado no que já tens: `node:sqlite` (`DatabaseSync`), `http` puro (sem framework) e o `user.controller.js` que já existe.

---

## 1. Criar o controller de Posts (CRUD completo)

Segue exatamente o padrão que já usaste em `user.controller.js` (`createUser`, `findUsers`, etc.), mas agora para a tabela `posts`.

Cria `src/controllers/post.controller.js` com:
- `createPost` — insere `title`, `description`, `userId`
- `findPosts` — lista todos os posts
- `findPostById` — busca um post pelo id na URL
- `updatePost` — atualiza um post existente
- `deletePost` — remove um post

Depois liga as rotas no `index.js`, do mesmo jeito que já fizeste para `updateUser` / `deleteUser` (PATCH e DELETE em `/api/posts/:id`).

**Podes pesquisar:**
- `"node:sqlite" prepare insert javascript`
- `node http request body JSON.parse chunks`
- `sqlite CONSTRAINT FOREIGN KEY insert error`

⚠️ **Atenção:** repara que `findUserById`, `updateUser` e `deleteUser` ainda usam `db.users.find(...)` — isso é resto de quando o `db` era um array. Agora que estás a usar SQLite a sério, tens de reescrever essas três funções usando `db.prepare(...).get()` / `.run()`. Aproveita este exercício para corrigir isso também, porque em `posts` vais precisar de fazer certo desde o início.

---

## 2. Ler posts com os dados do user (INNER JOIN)

Primeiro tenta **sem alias**, depois com alias.

**Pesquisar:**
- `sql inner join two tables example`
- `sqlite join foreign key`
- `sql alias AS keyword`

**Sem alias:**
```sql
SELECT posts.title, posts.description, users.name, users.country
FROM posts
INNER JOIN users ON posts.userId = users.id;
```

**Com alias** (mais curto, e permite renomear a coluna de saída):
```sql
SELECT p.title, p.description, u.name AS authorName
FROM posts AS p
INNER JOIN users AS u ON p.userId = u.id;
```

Usa uma destas queries dentro de `findPosts` / `findPostById`, para que cada post venha já com o nome do autor.

---

## 3. Filtrar posts por user (`?userId=`)

Quando vier `?userId=3` na URL, o filtro deve ser aplicado. Quando não vier, deve devolver todos os posts.

**Pesquisar:**
- `node.js parse query string URLSearchParams`
- `new URL(req.url, base)`
- `sql dynamic WHERE clause conditional`

```js
const parsedUrl = new URL(req.url, "http://localhost");
const userId = parsedUrl.searchParams.get("userId");

let query = `
  SELECT p.title, p.description, u.name AS authorName
  FROM posts p
  INNER JOIN users u ON p.userId = u.id
`;
const params = [];

if (userId) {
  query += " WHERE p.userId = ?";
  params.push(Number(userId));
}

const posts = db.prepare(query).all(...params);
```

Se `...params` confundir, pesquisa: `sqlite prepare all with parameters array`.

---

## 4. Mostrar quantos posts cada user tem (GROUP BY + LEFT JOIN)

Agora, quando fizeres `GET /api/users`, cada user deve vir com um campo extra `totalPosts`, mostrando quantos posts ele tem — mesmo que seja **0**.

**Pesquisar:**
- `sql GROUP BY COUNT example`
- `sql LEFT JOIN vs INNER JOIN`

**Exemplo pequeno, para um único user:**
```sql
SELECT u.name, COUNT(p.id) AS totalPosts
FROM users u
LEFT JOIN posts p ON p.userId = u.id
WHERE u.id = ?
GROUP BY u.id;
```

**Para todos os users de uma vez** (é isto que vais usar dentro de `findUsers`):
```sql
SELECT u.*, COUNT(p.id) AS totalPosts
FROM users u
LEFT JOIN posts p ON p.userId = u.id
GROUP BY u.id;
```

Repara bem porquê aqui é **LEFT JOIN** e não **INNER JOIN**:
- Com `INNER JOIN`, um user que ainda não tem nenhum post **desaparece** do resultado (porque não há nenhuma linha em `posts` para juntar).
- Com `LEFT JOIN`, o user aparece sempre, e `COUNT(p.id)` dá `0` quando não há posts.

Atualiza `findUsers` para usar esta query no lugar de `SELECT * FROM users`, e testa criando um user sem nenhum post — ele deve aparecer com `totalPosts: 0`.