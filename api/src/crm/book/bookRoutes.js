import {
  addNewBook,
  addNewBooks,
  getBooks,
  getBookWithID,
  updateBook,
  deleteBook
} from "./bookController";

var auth = require("../../middleware/authenticate");

const routes = app => {
  app
    .route("/book")
    .get(auth, getBooks)
    .post(auth, addNewBook);

  app
    .route("/book/:bookId")
    .get(auth, getBookWithID)
    .put(auth, updateBook)
    .delete(auth, deleteBook);

  app.route("/addAll").post(addNewBooks);
};

module.exports = routes;
