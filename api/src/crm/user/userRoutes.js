import { userLogin, userRegist } from "./userController";

const routes = app => {
  app.route("/register").post(userRegist);

  app.route("/login").post(userLogin);
};

module.exports = routes;
