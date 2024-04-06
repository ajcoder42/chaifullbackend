// Method-2 writting the code in "./db/dbConnection.js" then importing in "index.js"

import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("Error : ", (error) => {
      console.log("MongoDB Connection Error (app.on in index.js)", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`Server is Running on Port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("(catch in index.js) MongoDB Connection Error : ", error);
    throw error;
  });

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
