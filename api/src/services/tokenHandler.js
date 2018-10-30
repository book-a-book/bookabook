import jwt from "jwt-simple";
import moment from  "moment";
import config from  "../config/config";

export function createToken(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, "days")
      .unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

export function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "You need to include token" });
  }
  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: "The token is expired" });
  }
  req.user = payload.sub;
  next();
}
