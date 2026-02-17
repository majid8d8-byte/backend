const express = require("express");

const app = express();
app.use(express.json());

function plus(numbe) {
  return numbe + 10;
}

app.post("/", (req, res) => {
  const number = parseInt(req.body.number);

  const result = plus(number);

  res.send(result);
  console.log(number);
});

app.get("/", (req, res) => {
  res.send("hello");
});

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log("is ok");
});
