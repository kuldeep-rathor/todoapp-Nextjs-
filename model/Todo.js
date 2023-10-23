const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  todo: {
    type: String,
  },
  createdAt: {
    type: Date,
    Default: Date.now,
  },
});


mongoose.models = {}
module.exports = mongoose.model("Todos", todoSchema);
