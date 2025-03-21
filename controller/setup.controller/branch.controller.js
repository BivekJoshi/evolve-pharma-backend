// const slugify = require("slugify");
const BranchService = require("../../services/setup.service/branch.service");

class BranchController {
  constructor() {
    this.branch_svc = new BranchService();
  }
  branchStore = async (req, res, next) => {
    try {
      let data = req.body;

      // Validate the input data
      this.branch_svc.validateBranch(data);

      // Pass data to the createBranch function
      let response = await this.branch_svc.createBranch(data);

      res.json({
        result: response,
        msg: "Branch created successfully",
        status: true,
      });
    } catch (except) {
      console.log("Branch Store Error:", except);
      next({ status: 400, msg: except });
    }
  };
}
module.exports = BranchController;
