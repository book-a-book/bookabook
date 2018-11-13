import mongoose from "mongoose";
import { BookSchema } from "./bookModel";

const Book = mongoose.model("Book", BookSchema);

export const addNewBook = (req, res, next) => {
  let newBook = new Book(req.body);
  newBook.owner = req.user;

  newBook.save((err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const addNewBooks = (req, res) => {
  const books = req.body;

  addBooks(books, req.user)
    .then(response => res.json({ message: "Successfully added all books" }))
    .catch(err => res.status(500).send("Cannot save books"));
};

async function addBooks(books, owner) {
  books.forEach(book => {
    let newBook = new Book(book);
    newBook.owner = owner;
    newBook.save((err, newBook) => {
      if (err) throw new Error(err);
    });
  });
}

export const getBooks = (req, res) => {
  Book.find({}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getAviableBooks = (req, res) => {
  Book.find(
    { lendTo: null, owner: { $not: { $eq: req.user } } },
    (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    }
  );
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
  Book.remove({ _id: req.params.bookId, owner: req.user }, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted book" });
  });
};

export const getMyBooks = (req, res) => {
  Book.find({ owner: req.user }, (err, books) => {
    if (err) {
      res.send(err);
    }
    res.send(books);
  });
};
