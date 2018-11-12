import { UserSchema } from "../crm/user/userModel";
import mongoose from "mongoose";

var jwt = require("jwt-simple");
var moment = require("moment");

const User = mongoose.model("User", UserSchema);

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "You need to include token" });
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, process.env.TOKEN_SECRET);

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: "The token is expired" });
  }

  var user = User.findById(payload.sub);
  if (!user) {
    return res.status(401).send({ message: "Invlid Request" });
  }
  console.log("authtermina");
  req.user = payload.sub;
  next();
};
