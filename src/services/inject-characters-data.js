import { v4 as uuid } from "uuid";
import { db } from "../main.js";

export async function injectCharactersData() {
  const sql =
    "insert into characters(id, name) values" +
    CHARACTERS_DATA.map(
      (character) => `('${uuid()}', '${character.name}')`
    ).join(",") +
    ";";
  db.query(sql, (error) => {
    if (error) {
      return console.log(
        "🔴 Table 'characters' already populated with default data."
      );
    }
    return console.log("🟢 Characters injected successfuly!");
  });
  return;
}

const CHARACTERS_DATA = [
  {
    name: "John Snow",
  },
  {
    name: "Arya Stark",
  },
  {
    name: "Sansa Stark",
  },
  {
    name: "Rob Stark",
  },
  {
    name: "Bran Stark",
  },
  {
    name: "Rickon Stark",
  },
  {
    name: "Ned Stark",
  },
  {
    name: "Catelyn Stark",
  },
  {
    name: "Tyrion Lannister",
  },
  {
    name: "Jaime Lannister",
  },
  {
    name: "Cersei Lannister",
  },
  {
    name: "Tywin Lannister",
  },
  {
    name: "Joffrey Baratheon",
  },
  {
    name: "Tommen Baratheon",
  },
  {
    name: "Myrcella Baratheon",
  },
  {
    name: "Robert Baratheon",
  },
  {
    name: "Stannis Baratheon",
  },
  {
    name: "Renly Baratheon",
  },
  {
    name: "Daenerys Targaryen",
  },
  {
    name: "Viserys Targaryen",
  },
  {
    name: "Rhaegar Targaryen",
  },
  {
    name: "Rhaella Targaryen",
  },
  {
    name: "Aegon Targaryen",
  },
  {
    name: "Rhaenys Targaryen",
  },
];
