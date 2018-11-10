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
  console.log(req.body);
  User.findOne({ username: req.body.username }, function(err, user) {
    if (!user.validPassword(req.body.password)) {
      res.status(400).json({ message: "Bad credentials" });
    } else {
      return res.status(200).send({ token: createToken(user) });
    }
  });
};
