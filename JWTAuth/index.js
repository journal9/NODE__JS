const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const approutes = require('./src/routes/MainRoutes')
app.use(cors(), bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3003;

app.get("/home", (req, res) => {
  console.log("hello");
  res.send("server responding!!");
});

app.use(approutes);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
