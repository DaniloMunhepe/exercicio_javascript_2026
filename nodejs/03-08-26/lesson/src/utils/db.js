import { DatabaseSync } from "node:sqlite";

export const db = new DatabaseSync("./file.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    country TEXT NOT NULL
  )
`);

db.exec(`
 CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    publishedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId INTEGER NOT NULL,

    CONSTRAINT fk_user_id FOREIGN KEY (userId) REFERENCES users(id)
  )
`);

/*export const db = { users: [], posts: [] };*/

// name, age, country
// posts: { title, description, published: boolean, userId }
// neon
