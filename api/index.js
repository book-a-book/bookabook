import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const routes = require("./src/routes");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useMongoClient: true
}
);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Back-end server is running on port ${PORT}`)
);
