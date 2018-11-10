import mongoose from "mongoose";
import { BookSchema } from "./bookModel";

const Book = mongoose.model("Book", BookSchema);

export const addNewBook = (req, res, next) => {
  console.log(req.user);
  let newBook = new Book(req.body);
  newBook.owner = req.user;

  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    }
    console.log("se guardo");
    res.json(book);
  });
};

export const addNewBooks = (req, res) => {
  let books = req.body.books;
  console.log(books);
  for (let i = 0; i < books.length; i++) {
    let newBook = new Book(books[i]);
    newBook.save((err, book) => {
      if (err) {
        res.send(err);
      }
    });
  }
  res.json({ message: "Successfully added all books" });
};

export const getBooks = (req, res) => {
  Book.find({}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getBookWithID = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.bookId },
    req.body,
    { new: true },
    (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    }
  );
};

export const deleteBook = (req, res) => {
  Book.remove({ _id: req.params.bookId }, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted book" });
  });
};
