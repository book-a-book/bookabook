import {
  userLogin,
  userRegist,
  getUsers,
  getUserWithID
} from "./userController";
var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/api/register")
    .post(userRegist);

  app.route("/api/login")
    .post(userLogin);

  app.route("/api/user")
    .get(auth, getUsers);

  app.route("/api/user/:id")
    .get(auth, getUserWithID);
};

module.exports = routes;
