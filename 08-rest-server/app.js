
require("dotenv").config();



app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
