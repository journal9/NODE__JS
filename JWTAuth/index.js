const express = require("express");
const app = express();
const router = express.Router();
const approutes = require('./src/routes/MainRoutes')

const port = 3003;

app.get("/home", (req, res) => {
  console.log("hello");
  res.send("server responding!!");
});

app.use(approutes);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
