import {
  userLogin,
  userRegist,
  getUsers,
  getUserWithID
} from "./userController";
var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/register")
    .post(userRegist);

  app.route("/login")
    .post(userLogin);

  app.route("/user")
    .get(auth, getUsers);

  app.route("/user/:id")
    .get(auth, getUserWithID);
};

module.exports = routes;
