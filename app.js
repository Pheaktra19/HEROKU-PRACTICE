const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
})
app.get("/api/users", (req, res) => {
  res.send("Hello World");
})
app.listen(port, () => {
  console.log('app is running');
})