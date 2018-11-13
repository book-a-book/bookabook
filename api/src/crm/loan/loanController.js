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

    if (book.lentTo) {
      return res
        .status(400)
        .send({ message: "El libro no esta disponible pa prestar" });
    }

    let loan = new Loan({
      owner: book.owner,
      lentTo: req.user,
      book: req.params.bookId,
      state: 0
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
  Loan.findOneAndUpdate(
    { _id: req.params.loanId },
    { $set: { state: 1 } },
    { new: true },
    (err, loan) => {
      if (err) {
        res.send(err);
      }
      res.json(loan);
    }
  );
};

/*
export const loanFinish = (req, res, next) => {};

export const loanFinishRequest = (req, res, next) => {};
 */
