import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <h2 className="searchbar__title">Search to find your new best friend!</h2>
      {/* <div> */}
      <input
        className="searchbar__input"
        type="text"
        placeholder="Your new best friend is waiting for you..."
        // value={query}
        // onChange={handleInputChange}
      />
      {/* </div> */}
    </div>
  );
}
