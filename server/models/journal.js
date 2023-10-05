const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    imagePath: {
      type: String,
    },
  },
  { timestamps: true }
);

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
