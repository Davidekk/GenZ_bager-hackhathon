"use server";

import { Pool } from "pg";

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "hack",
  password: "admin",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }

  if (client) {
    client.query("SELECT NOW()", (err, result) => {
      release();
      if (err) {
        return console.error("Error executing query", err.stack);
      }
      console.log(result.rows);
    });
  } else {
    console.error("Client is undefined.");
  }
});

export async function getQuestionFromSQL(param: string) {
  let resultsQ: any[] = [];

  try {
    console.log("Executing query:", param.toString());
    // Assuming param is a string ending with a semicolon and needs to be trimmed
    const queryText = param.toString();
    const { rows } = await pool.query(queryText);
    resultsQ = rows;
    console.log("Query results:", resultsQ);
  } catch (error) {
    console.error("Error executing query:", error);
  }

  return resultsQ;
}
