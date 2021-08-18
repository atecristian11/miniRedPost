const mongoose = require("mongoose");

const postcSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  text: String,
  hashtag: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const postc = mongoose.model("postc", postcSchema);
module.exports = postc;
