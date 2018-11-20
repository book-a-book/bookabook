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
  app.route("/api/borrow/:bookId")
    .post(auth, loanRequest);

  app.route("/api/borrow-accept/:loanId")
    .post(auth, loanAccept);

  app.route("/api/return/:loanId")
    .post(auth, returnBook);

  app.route("/api/return-accept/:loanId")
    .post(auth, returnAcceptBook);

  app.route("/api/loans/pending")
    .get(auth, loansPending);

  app.route("/api/loans/active")
    .get(auth, loansActive);
};

module.exports = routes;
