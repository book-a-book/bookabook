import {
  addNewBook,
  addNewBooks,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook,
  getAviableBooks
} from "./bookController";

var auth = require("../../middleware/authenticate");

const routes = app => {
  app
    .route("/books")
    .get(auth, getBooks)
    .post(auth, addNewBook);

  app.route("/books/avaiable").get(auth, getAviableBooks);

  app
    .route("/books/:bookId")
    .get(auth, getBookWithID)
    .put(auth, updateBook)
    .delete(auth, deleteBook);

  app.route("books/add-all").post(addNewBooks);
};

module.exports = routes;
