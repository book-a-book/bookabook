import {
  userLogin,
  userRegist,
  getUsers,
  getUserWithID
} from "./userController";
var auth = require("../../middleware/authenticate");

const routes = app => {
  app.post("/api/register", userRegist);

  app.post("/api/login", userLogin);

  app.get("/api/users", auth, getUsers);

  app.get("/api/user/:id", auth, getUserWithID);
};

module.exports = routes;
