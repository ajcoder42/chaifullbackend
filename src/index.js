// Method-2 writting the code in "./db/dbConnection.js" then importing in "index.js"

import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";

dotenv.config({
  path: "./env",
});

connectDB();

/* 

// Method - 1  Simply Writting whole code in "index.js" file

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("ERROR", (error) => {
      console.log("MongoDB Connection Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is Listening on Port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
})();

*/
