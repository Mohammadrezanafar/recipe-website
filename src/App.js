import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ServerSearchBar from "./Components/Server";
import Form from "./Components/Recipes";

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
      <Form />
      <div className="recipes-list">
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div>
                <img className="recipe-images" src={recipe.photo} />
                <h2>{recipe.title}</h2>
                <div className="recipe-card">
                  <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                  <p>Instructions: {recipe.instructions}</p>
                </div>
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
