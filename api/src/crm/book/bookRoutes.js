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
  app.get("/api/books", auth, getBooks);
  app.post("/api/books", auth, addNewBook);

  app.get("/api/books/avaiable", auth, getAviableBooks);

  app.get("/api/books/mine", auth, getMyBooks);

  app.get("/api/books/:bookId", auth, getBookWithID);
  app.put("/api/books/:bookId", auth, updateBook);
  app.delete("/api/books/:bookId", auth, deleteBook);

  app.post("/api/books/add-all", auth, addNewBooks);
};

module.exports = routes;
