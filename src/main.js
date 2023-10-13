import http from "http";
import mysql from "mysql";
import { dbConfig } from "./config/db.config.js";
import { createCharactersTable } from "./services/create-characters-table.js";
import getAllCharacters from "./services/get-all-characters.js";
import { injectCharactersData } from "./services/inject-characters-data.js";

const port = 3000;
export const db = mysql.createConnection(dbConfig);

db.connect(async (error) => {
  if (error) throw error;
  console.log("🟢 Connected to MySQL database!");

  await createCharactersTable();
  await injectCharactersData();
});
const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/api":
      const characters = await getAllCharacters();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(
        JSON.stringify({
          html: `<h1>Full Cycle Rocks!</h1>`,
          data: { ...characters },
          status: 200,
        })
      );

    case "/api/characters":
      try {
        const characters = await getAllCharacters();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(characters));
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
