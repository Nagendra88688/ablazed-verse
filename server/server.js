const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const JournalRoute = require("./routes/journal");

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error occured -> ", err);
});

db.once("open", () => {
  console.log("Database connection established...");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 9000;

// Enable CORS for all routes
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// using routes
app.use("/api/journal", JournalRoute);
