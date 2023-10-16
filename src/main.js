import http from "http";
import mysql from "mysql";
import { dbConfig } from "./config/db.config.js";
import { createPeopleTable } from "./services/create-people-table.js";
import getAllPeople from "./services/get-all-people.js";
import { injectPeopleData } from "./services/inject-people-data.js";

const port = 3000;
export const db = mysql.createConnection(dbConfig);

db.connect(async (error) => {
  if (error) throw error;
  console.log("🟢 Connected to MySQL database!");

  await createPeopleTable();
  await injectPeopleData();
});
const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/api":
      const people = await getAllPeople();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(
        JSON.stringify({
          html: `<h1>Full Cycle Rocks!</h1>`,
          data: { ...people },
          status: 200,
        })
      );

    case "/api/people":
      try {
        const people = await getAllPeople();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(people));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error");
      }
      break;

    default:
      res.statusCode = 404;
      res.end("Page Not Found\n");
  }
});

server.listen(port, () => {
  console.log(`Server running!🎉`);
});
