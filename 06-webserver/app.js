const express = require("express");
const app = express();

// Serving static files
app.use(express.static("public"));

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port:${port}`);
});
