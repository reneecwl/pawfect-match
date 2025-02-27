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
      <h2 className="searchbar__title">Search to find your new best friend!</h2>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Your new best friend is waiting for you..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="searchbar__button"
        onClick={handleSearch}
      >
        Find my Pawfect Match!
      </button>
    </div>
  );
}
