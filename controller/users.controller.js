const UserService = require("../services/user.services");

class UsersController {
  constructor() {
    this.user_svc = new UserService();
  }

  getAllUser = async (req, res, next) => {
    let data = await this.user_svc.getAllUser();
    res.json({
      result: data,
      status: true,
      msg: "User Data fetched",
    });
  };
}
module.exports = UsersController;
