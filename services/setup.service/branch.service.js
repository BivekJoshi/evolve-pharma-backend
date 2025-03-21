const Joi = require("joi");
const BranchModal = require("../../modal/setup.modal/branch.modal");

class BranchService {
  validateBranch = (data) => {
    try {
      let branchSchema = Joi.object({
        name: Joi.string().min(3).required(),
      });
      let response = branchSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  createBranch = async (data) => {
    console.log("🚀 ~ BranchService ~ createBranch= ~ data:", data)
    try {
      let branch_obj = new BranchModal(data);
      return await branch_obj.save();
    } catch (excep) {
      if (excep.code === 11000) {
        let keys = Object.keys(excep.keyPattern);
        throw keys.join(", ") + " should be unique";
      }
      throw excep;
    }
  };

  getBranchById = async (id) => {
    try {
      let branch = await BranchModal.findById(id);
      return branch;
    } catch (err) {
      throw err;
    }
  };

  getAllBranch = async () => {
    try {
      let branch = await BranchModal.find();
      return branch;
    } catch (err) {
      throw err;
    }
  };
}
module.exports = BranchService;
