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
          create select from this structure of table

          CREATE TABLE banking_data (
            User_Id VARCHAR(255), this is user id
            Bank_Id VARCHAR(255), this is name of the bank
            User_Name VARCHAR(255), this is name of the user
            User_Surname VARCHAR(255), this is surname of the user
            Payment_Method VARCHAR(255), this is payment method, can be online or card
            Transaction_Purpose VARCHAR(255), this can be Income,Travel,Savings,Shop,Grocery,Withdraw,Event
            Payment_Date DATE, this is date of the payment
            Amount DECIMAL(10, 2), this is amount of the payment if transaction purpose is income then amount is positive else negative
            PaymentRecipientOrSender_Name VARCHAR(255), this is name of the recipient or sender
            );
            
            and question is ${question} ${userId ? `my id is ${userId}` : ""} ${
              ids || ""
            }
        but return ONLY the SQL without any extra commentary but do not return markdown just plain SQL
        `,
        },
      ], // gpt-4-1106-preview gpt-3.5-turbo
      model: "gpt-3.5-turbo",
    });

    if (chatCompletion?.choices[0]?.message?.content === undefined || null)
      return { error: "No response from OpenAI.", isNext: false };

    const sqlResponse = await getQuestionFromSQL(
      chatCompletion?.choices[0]?.message?.content || ""
    );

    return { sqlResponse, isNext: false, historyId: "123" };
  } catch (error) {
    console.log(error);
  }
}
