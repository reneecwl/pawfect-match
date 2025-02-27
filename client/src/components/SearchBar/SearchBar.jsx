import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <div>
        <input
          type="text"
          placeholder="Your new best friend is waiting for you..."
          // value={query}
          // onChange={handleInputChange}
        />
      </div>
      <h3 className="searchbar__title">Search to find your new best friend!</h3>
    </div>
  );
}
