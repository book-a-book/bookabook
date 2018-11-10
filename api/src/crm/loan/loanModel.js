import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LoanSchema = new Schema({
  book: {
    type: String,
    required: "Enter a book"
  },
  owner: {
    type: String,
    required: "Enter an owner"
  },
  lentTo: {
    type: String,
    required: "Enter who wants the book"
  },
  state: {
    type: Number,
    required: true
  }
});

/* 
    States:
    0: Pide prestamo
    1: Acepta prestamo
    2: Devuelve libro
    3: Acepta devolución
*/
