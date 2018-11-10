import jwt from "jwt-simple";
import moment from "moment";

export function createToken(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, "days")
      .unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}
