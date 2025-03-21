// const auth = require("../app/middleware/auth.middleware");
// const { isAdmin } = require("../app/middleware/rbac.middleware");
// const uploader = require("../app/middleware/uploader.middleware");
const BranchController = require("../../controller/setup.controller/branch.controller");

const branch_ctrl = new BranchController();

const router = require("express").Router();

router
  .route("/")
  //   .get(branch_ctrl.getCategories)
  .post(branch_ctrl.branchStore);

// router
//   .route("/:id")
//   .get(branch_ctrl.getCategoryById)
//   .delete(auth, isAdmin, branch_ctrl.deleteCategoryById)
//   .put(auth, isAdmin, uploader.single("image"), branch_ctrl.categoryUpdate);

module.exports = router;
