import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();

//imports
import db from "./db.config.js";
import Data from "./default.js";

// Database config
db();

// middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Running on : ${port} `);
});
Data();
