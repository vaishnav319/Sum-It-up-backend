const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
