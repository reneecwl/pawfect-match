import "./SearchBar.scss";
import { useState } from "react";

export default function SearchBar({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Your new best friend is waiting for you..."
        className="searchbar__searchbar"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="searchbar__button"
        onClick={handleSearch}
      >
        Find my Pawfect Match!
      </button>
      <h3 className="searchbar__title">Search to find your new best friend!</h3>
    </div>
  );
}
