import { db } from "../main.js";

export async function createPeopleTable() {
  db.query(
    `create table people(id varchar(36) not null unique, primary key(id), name varchar(50) unique);`,
    (error) => {
      if (error) {
        return console.log("🔴 Table people already exists");
      } else {
        console.log("🟢 Table people created successfully");
      }
    }
  );
  return;
}
