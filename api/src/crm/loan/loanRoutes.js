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
  app.post("/api/borrow/:bookId", auth, loanRequest);

  app.post("/api/borrow-accept/:loanId", auth, loanAccept);

  app.post("/api/return/:loanId", auth, returnBook);

  app.post("/api/return-accept/:loanId", auth, returnAcceptBook);

  app.get("/api/loans/pending", auth, loansPending);

  app.get("/api/loans/active", auth, loansActive);
};

module.exports = routes;
