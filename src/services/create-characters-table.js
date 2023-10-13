import { db } from "../main.js";

export async function createCharactersTable() {
  db.query(
    `create table characters(id varchar(36) not null unique, primary key(id), name varchar(50) unique);`,
    (error) => {
      if (error) {
        return console.log("🔴 Table characters already exists");
      } else {
        console.log(
          "🟢 Table characters created successfully"
        );
      }
    }
  );
  return;
}
