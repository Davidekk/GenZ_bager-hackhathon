"use server";

import OpenAI from "openai";
import { getSQLParams } from "./shared.types";
import { getQuestionFromSQL } from "../sql/connectdb";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API || "",
});

export async function getQuestion(params: getSQLParams) {
  try {
    const { question, groupId = "", userId = "" } = params;

    let ids = "";
    if (groupId !== "") {
      ids = `and ids of my group is = ${groupId} `;
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
          CREATE TABLE banking_data (
            Id INTEGER,
            AccountType VARCHAR(255),
            User_Name VARCHAR(255),
            User_Surname VARCHAR(255),
            PaymentType VARCHAR(255),
            PaymentCategory VARCHAR(255),
            PaymentDate DATE,
            Amount DECIMAL(10, 2),
            Partner_Name VARCHAR(255)
        );
        

        create select from this table ${question} ${
          userId ? `my id is ${userId}` : ""
        } ${ids || ""}
        but return ONLY the SQL without any extra commentary but do not return markdown just plain SQL
        `,
        },
      ], // gpt-4-1106-preview gpt-3.5-turbo
      model: "gpt-4-1106-preview",
    });

    if (chatCompletion?.choices[0]?.message?.content === undefined || null)
      return { error: "No response from OpenAI.", isNext: false };

    const sqlResponse = await getQuestionFromSQL(
      chatCompletion?.choices[0]?.message?.content
    );

    return { sqlResponse, isNext: false, historyId: "123" };
  } catch (error) {
    console.log(error);
  }
}
