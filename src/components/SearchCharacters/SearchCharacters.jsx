import React, { useRef } from "react";
import "./SearchCharacters.css";
const SearchCharacters = ({ value, onChange }) => {
  const searchInput = useRef(null);

  const handleSearch = () => {
    onChange(searchInput);
  };

  return (
    <div className="Search">
      <div>Search by name:</div>
      <input
        type="text"
        value={value}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchCharacters;
