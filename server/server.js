const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const JournalRoute = require("./routes/journal");

const URL =
  "mongodb+srv://ablazed-verse:ablazedVerse@ablazed-verse-cluster.kyomifx.mongodb.net/?retryWrites=true&w=majority";

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

const PORT = process.env.port || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// using routes
app.use("/api/journal", JournalRoute);
