import { loanRequest, loanAccept } from "./loanController";

var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/borrow/:bookId").post(auth, loanRequest);

  app.route("/borrow-accept/:loanId").post(auth, loanAccept);
};

module.exports = routes;
