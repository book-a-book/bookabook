import mongoose from "mongoose";
import { UserSchema } from "./userModel";
import { createToken } from "../../services/tokenHandler";

const User = mongoose.model("User", UserSchema);

export const userRegist = (req, res) => {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    username: req.body.username,
    password: ""
  });
  user.password = user.generateHash(req.body.password);
  user.save(function(err) {
    if (err) {
      console.log(err);
      return res.status(400).send({ message: err });
    }

    return res.status(200).send({ message: "ok" });
  });
};

export const userLogin = (req, res) => {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (!user || !user.validPassword(req.body.password)) {
      res.status(400).json({ message: "Bad credentials" });
    } else {
      return res.status(200).send({ token: createToken(user) });
    }
  });
};

export const addLendRate = (user, rate) => {
  User.findOne({ _id: user }, function(err, user) {
    if (err) {
      return res.status(400).send({ message: err });
    }

    let totalRate = user.rating * user.total;

    user.lend += 1;

    user.total += 1;

    user.rating = (totalRate + rate) / user.total;

    user.save((err, user) => {
      if (err) {
        return res.send(err);
      }
    });
  });
};

export const addBorrowRate = (user, rate) => {
  User.findOne({ _id: user }, function(err, user) {
    if (err) {
      return res.status(400).send({ message: err });
    }

    let totalRate = user.rating * user.total;

    user.borrow += 1;

    user.total += 1;

    user.rating = (totalRate + rate) / user.total;

    user.save((err, user) => {
      if (err) {
        return res.send(err);
      }
    });
  });
};
