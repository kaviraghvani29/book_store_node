const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./database/db");
const bookRoute = require("./routes/bookRoute");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/v1/books", bookRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT} `);
});
