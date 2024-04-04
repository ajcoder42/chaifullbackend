import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n DB Connected Successfully !! 😎 DB-HOST : ${connectionResponse.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED !!! 😣", error);
    process.exit(1);
  }
};

export default connectDB;
