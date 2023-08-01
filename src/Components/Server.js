import React, { useState } from "react";
const ServerSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Send the searchQuery to the server using an API call (e.g., fetch, axios, etc.)
    fetch(`/api/search?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Search results:", data);
        // Handle the search results returned from the server
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="nav-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default ServerSearchBar;
