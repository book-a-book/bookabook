import {
  loanRequest,
  loanAccept,
  loansPending,
  loansActive,
  returnBook,
  returnAcceptBook
} from "./loanController";

var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/borrow/:bookId").post(auth, loanRequest);

  app.route("/borrow-accept/:loanId").post(auth, loanAccept);

  app.route("/loans/pending").get(auth, loansPending);
  app.route("/loans/active").get(auth, loansActive);

  app.route("/return/:loanId").post(auth, returnBook);

  app.route("/return-accept/:loanId").post(auth, returnAcceptBook);
};

module.exports = routes;
