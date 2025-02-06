const mongoose = require("mongoose");
const { STATUS } = require("../utils/Enum");

const trigger = {
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
};

const created_by = {
  type: mongoose.Types.ObjectId,
  ref: "User",
  default: null,
};

const statusSchema = {
  type: String,
  enum: STATUS,
  default: "INACTIVE",
};

module.exports = { trigger, created_by, statusSchema };
