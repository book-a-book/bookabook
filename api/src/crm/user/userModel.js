import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name"
  },
  lastName: {
    type: String,
    required: "Enter a last name"
  },
  username: {
    type: String,
    required: "Enter a username"
  },
  password: {
    type: String,
    required: "Enter a password"
  },
  picture: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  borrow: {
    type: Number,
    default: 0
  },
  lend: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  }
});

// hash the password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
