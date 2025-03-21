const mongoose = require("mongoose");
const { created_by, trigger } = require("../common.schema");

const BranchSchemaDef = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    created_by: created_by,
  },
  trigger
);

const BranchModal = mongoose.model("Branch", BranchSchemaDef);
module.exports = BranchModal;
