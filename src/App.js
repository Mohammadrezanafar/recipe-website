import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ServerSearchBar from "./Components/Server";
function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch Api recipes
    fetch("http://localhost:3002/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <ServerSearchBar />
      <div className="recipes-list">
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div className="recipe-card">
                <img className="recipe-images" src={recipe.photo} />
                <h2>{recipe.title}</h2>
                <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                <p>Instructions: {recipe.instructions}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
