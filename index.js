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
  const data = JSON.stringify(recipes, null, 2);
  fs.writeFileSync(path.join("Data.json"), "utf8");
}

server.get("/recipes", (req, res) => {
  const recipes = readRecipesFromFile();
  res.json(recipes);
});

server.post("/submit", (req, res) => {
  try {
    const newSubmit = req.body;
    let existingData = [];
    if (fs.existsSync("user.json")) {
      const userData = fs.readFileSync(path.join("user.json"), "utf-8");
      existingData = JSON.parse(userData);
    }
    existingData.push(newSubmit);
    fs.writeFileSync("user.json", JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: "Data submitted!" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "error" });
  }
});
// server.post("/recipes", (req, res) => {
//   const newRecipe = req.body; // Assuming the recipe data is sent in the request body
//   const recipes = readRecipesFromFile();

//   writRecipesFromFile(recipes);
//   recipes.push(newRecipe);
//   res.json(recipes);
// });

server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server ready on port :", PORT);
});
