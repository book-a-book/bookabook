import {
  userLogin,
  userRegist,
  getUsers,
  getUserWithID
} from "./userController";
var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/register").post(userRegist);

  app.route("/login").post(userLogin);

  app.route("/users").get(auth, getUsers);

  app.route("/users/:id").get(auth, getUserWithID);
};

module.exports = routes;
