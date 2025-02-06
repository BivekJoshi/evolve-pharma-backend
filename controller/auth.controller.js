const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/user.services");
const Config = require("../config/config");

class AuthController {
  constructor() {
    this.user_svc = new UserService();
  }

  registerUser = async (req, res, next) => {
    try {
      let body = req.body;
      if (req.file) {
        body.image = req.file.filename;
      }
      this.user_svc.validateUser(body);

      body.password = bcrypt.hashSync(body.password, 10);
      let data = await this.user_svc.createUser(body);

      res.json({
        result: data,
        status: true,
        msg: "Register in successfully",
      });
    } catch (excp) {
      console.log("🚀 ~ AuthController ~ excp:", excp);
      next({ status: 400, msg: excp });
    }
  };

  loginUser = async (req, res, next) => {
    try {
      let data = req.body;
      let loggedInUser = await this.user_svc.getUserByEmail(data);
      if (loggedInUser) {
        if (bcrypt.compareSync(data.password, loggedInUser.password)) {
          let token = jwt.sign(
            {
              user_id: loggedInUser._id,
            },
            Config.JWT_SECRET
          );
          res.json({
            result: {
              user: loggedInUser,
              access_token: token,
            },
            status: true,
            msg: "Logged in Successfully",
          });
        } else {
          next({
            status: 400,
            msg: "Password doesnot match",
          });
        }
      } else {
        next({
          status: 400,
          msg: "Credentials doesnot match",
        });
      }
    } catch (exep) {
      console.log("🚀 ~ AuthController ~ exep:", exep);
      next({
        status: 400,
        msg: JSON.stringify(exep),
      });
    }
  };

  logoutUser = (req, res, next) => {
    let validation_flag = false;

    // if (!validation_flag) {
    //   next({
    //     status: 400,
    //     msg: "Credentials do not match",
    //   });
    // } else {
    //   res.json({
    //     result: null,
    //     status: true,
    //     msg: "Logged in successfully",
    //   });
    // }
  };

  getLoggedInUser = (req, res, next) => {
    res.json({
      result: req.auth_user,
      status: true,
      msg: "Your Profile",
    });
  };
}

module.exports = AuthController;
