const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const PORT = 3002;
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
server.use(bodyParser.json());

function readRecipesFromFile() {
  const data = fs.readFileSync(path.join("Data.json"), "utf8");
  return JSON.parse(data);
}

function writRecipesFromFile() {
  const data = fs.readFileSync(path.join("Data.json"), "utf8");
  return JSON.parse(data);
}
server.get("/recipes", (req, res) => {
  const recipes = readRecipesFromFile();
  res.json(recipes);
});

server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server ready on port :", PORT);
});
