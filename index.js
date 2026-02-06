const express = require('express');
const app = express();

const SECRET_KEY = "my-hardcoded-secret";

app.get('/', (req, res) => {
  res.send("Hello DevSecOps");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

