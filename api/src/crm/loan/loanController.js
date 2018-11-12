import mongoose from "mongoose";

import { LoanSchema } from "./loanModel";
import { BookSchema } from "../book/bookModel";

const Loan = mongoose.model("Loan", LoanSchema);

const Book = mongoose.model("Book", BookSchema);

export const loanRequest = (req, res, next) => {
  Book.findOne({ _id: req.params.bookId }, function(err, book) {
    if (err) {
      return res.status(400).send({ message: err });
    }

    if (book.lendTo) {
      return res.status(400).send({ message: "El libro ya esta prestado" });
    }

    let loan = new Loan({
      owner: book.owner,
      lentTo: req.user,
      book: req.params.bookId,
      status: 0
    });

    loan.save((err, loan) => {
      if (err) {
        res.send(err);
      }
      res.json(loan);
    });
  });
};

export const loanAccept = (req, res, next) => {
  Loan.findOne({ _id: req.params.loanId }, function(err, loan) {
    if (err) {
      return res.status(400).send({ message: err });
    }
    if (req.user !== loan.owner) {
      return res.status(400).send({ message: "Bad request" });
    }
    Book.findOne({ _id: loan.book }, function(err, book) {
      if (err) {
        return res.status(400).send({ message: err });
      }
      if (book && book.lendTo) {
        return res.status(400).send({ message: "Libro ya prestado" });
      }

      book.lendTo = loan.lentTo;

      book.save((err, book) => {
        if (err) {
          return res.send(err);
        }
      });
    });

    loan.status = 1;
    loan.save((err, loan) => {
      if (err) {
        return res.send(err);
      }
    });
    res.json(loan);
  });
};

export const loanFinishAccept = (req, res, next) => {
  Loan.findOneAndUpdate(
    { _id: req.params.loanId },
    { $set: { state: 2 } },
    { new: true },
    (err, loan) => {
      if (err) {
        res.send(err);
      }
      res.json(loan);
    }
  );
};

export const loanFinishRequest = (req, res, next) => {
  Loan.findOneAndUpdate(
    { _id: req.params.loanId },
    { $set: { state: 3 } },
    { new: true },
    (err, loan) => {
      if (err) {
        res.send(err);
      }
      res.json(loan);
    }
  );
};
