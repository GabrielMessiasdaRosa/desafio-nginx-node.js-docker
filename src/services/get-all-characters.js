import { db } from "../main.js";

async function getAllCharacters(req, res) {
  return new Promise((resolve, reject) => {
    db.query("select * from characters", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const characters = results.map((row) => ({
          id: row.id,
          name: row.name,
        }));
        resolve(characters);
      }
    });
  });
}
export default getAllCharacters;
