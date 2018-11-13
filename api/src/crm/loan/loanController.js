import mongoose from "mongoose";

import { LoanSchema } from "./loanModel";
import { BookSchema } from "../book/bookModel";
import { UserSchema } from "../user/userModel";

import { addLendRate, addBorrowRate } from "../user/userController";

const Loan = mongoose.model("Loan", LoanSchema);

const Book = mongoose.model("Book", BookSchema);

const User = mongoose.model("User", UserSchema);

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
      status: 0,
      bookObj: book
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

export const returnBook = (req, res, next) => {
  Loan.findOne({ _id: req.params.loanId }, function(err, loan) {
    if (err) {
      return res.status(400).send({ message: err });
    }
    if (req.user !== loan.lentTo) {
      return res.status(400).send({ message: "Bad request" });
    }
    loan.status = 2;
    loan.save((err, loan) => {
      if (err) {
        return res.send(err);
      }
    });
    addLendRate(loan.owner, req.body.rate);
    res.json(loan);
  });
};
export const returnAcceptBook = (req, res, next) => {
  Loan.findOne({ _id: req.params.loanId }, function(err, loan) {
    if (err) {
      return res.status(400).send({ message: err });
    }
    if (req.user !== loan.owner) {
      return res.status(400).send({ message: "Bad request" });
    }
    loan.status = 3;
    loan.save((err, loan) => {
      if (err) {
        return res.send(err);
      }
    });

    Book.findOne({ _id: loan.book }, function(err, book) {
      if (err) {
        return res.status(400).send({ message: err });
      }
      book.lendTo = null;

      book.save((err, book) => {
        if (err) {
          return res.send(err);
        }
      });
    });
    addBorrowRate(loan.lentTo, req.body.rate);

    res.json(loan);
  });
};

export const loansPending = (req, res, next) => {
  Loan.find(
    {
      $or: [{ owner: req.user, status: 0 }, { lentTo: req.user, status: 0 }]
    },
    (err, loans) => {
      if (err) {
        res.send(err);
      }
      res.send(loans);
    }
  );
};

export const loansActive = (req, res, next) => {
  Loan.find(
    {
      $or: [{ owner: req.user }, { lentTo: req.user }],
      status: 1
    },
    (err, loans) => {
      if (err) {
        res.send(err);
      }
      res.send(loans);
    }
  );
};
