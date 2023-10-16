import { v4 as uuid } from "uuid";
import { db } from "../main.js";

export async function injectPeopleData() {
  const sql =
    "insert into people(id, name) values" +
    PEOPLE_DATA.map((people) => `('${uuid()}', '${people.name}')`).join(",") +
    ";";
  db.query(sql, (error) => {
    if (error) {
      return console.log(
        "🔴 Table 'people' already populated with default data."
      );
    }
    return console.log("🟢 Peoples data injected successfuly!");
  });
  return;
}

const PEOPLE_DATA = [
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
