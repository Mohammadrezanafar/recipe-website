import React from "react";
const Header = () => {
  return (
    <header>
      <nav>
        <h1>Recipe Website</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
