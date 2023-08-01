import React from "react";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="/order">Order</a>
          </li>
        </ul>
      </nav>

      <div className="nav-bar">
        <form className="form">
          <h2>Recipes</h2>
          <p>Explore delicious recipes and place your order!</p>
        </form>
      </div>
    </header>
  );
};
export default Header;
