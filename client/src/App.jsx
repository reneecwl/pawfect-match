import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import PhotoList from "./components/PhotoList/PhotoList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <PhotoList
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}

export default App;
