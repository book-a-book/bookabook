import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const routes = require("./src/routes");
const cors = require("cors");

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/CRMdb",
  {
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
