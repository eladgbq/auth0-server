const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let loginRec = new Schema(
  {
    _id: String,
    dates: {
      type: [Number]
    },
  },
  { collection: "loginHistory" }
);

module.exports = mongoose.model("loginRecs", loginRec);