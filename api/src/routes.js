const loans = require("./crm/loan/loanRoutes");
const books = require("./crm/book/bookRoutes");
const users = require("./crm/user/userRoutes");

const resourceRoutes = [users, books, loans];

module.exports = app => {
  resourceRoutes.forEach(routes => routes(app));
  return app;
};
