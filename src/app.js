import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { LIMIT } from "./constants.js";

const app = express();

// confifuration of cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// configuration of json files
app.use(
  express.json({
    limit: `${LIMIT}`,
  })
);

// configuration of files coming from URL
app.use(
  express.urlencoded({
    extended: true,
    limit: `${LIMIT}`,
  })
);

// configuration of cookies
app.use(cookieParser());
