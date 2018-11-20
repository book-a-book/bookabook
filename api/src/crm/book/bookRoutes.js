import {
  addNewBook,
  addNewBooks,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook,
  getAviableBooks,
  getMyBooks
} from "./bookController";

var auth = require("../../middleware/authenticate");

const routes = app => {
  app.route("/api/books")
    .get(auth, getBooks)
    .post(auth, addNewBook);

  app.route("/api/books/avaiable")
    .get(auth, getAviableBooks);

  app.route("/api/books/mine")
    .get(auth, getMyBooks);

  app.route("/api/books/:bookId")
    .get(auth, getBookWithID)
    .put(auth, updateBook)
    .delete(auth, deleteBook);

  app.route("/api/books/add-all")
    .post(addNewBooks);
};

module.exports = routes;
