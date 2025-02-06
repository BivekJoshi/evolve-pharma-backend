const mongoose = require("mongoose");
const { trigger, created_by } = require("./common.schema");

const UserSchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "CUSTOMER", "seller"],
      default: "CUSTOMER",
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "INACTIVE",
    },
    address: {
      type: String,
      default: null,
    },
    image: {
      type: String,
    },
    created_by: created_by,
  },
  trigger
);

const UserModel = mongoose.model("User", UserSchemaDef);
module.exports = UserModel;
