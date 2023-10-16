import { db } from "../main.js";

async function getAllPeople(req, res) {
  return new Promise((resolve, reject) => {
    db.query("select * from people", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const people = results.map((row) => ({
          id: row.id,
          name: row.name,
        }));
        resolve(people);
      }
    });
  });
}
export default getAllPeople;
