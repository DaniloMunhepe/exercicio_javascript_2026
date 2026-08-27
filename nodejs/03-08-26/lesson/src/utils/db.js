import { DatabaseSync } from "node:sqlite"

export const db = new DatabaseSync("./file.db")

// db.exec(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     age INTEGER NOT NULL,
//     country TEXT NOT NULL
//   )
// `)

/*export const db = { users: [], posts: [] };*/

// name, age, country
// posts: { title, description, published: boolean, userId }
// neon
