const express = require("express");
const userRoutes = require("./src/path/router");
const app = express();
const port = 4000;

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

app.use("/api/v1/path", userRoutes);
app.listen(port, () => {
  console.log(`server has been started at port ${port}`);
});
