import React, { useRef } from "react";

const SearchCharacters = ({ value, onChange }) => {
  const searchInput = useRef(null);

  const handleSearch = () => {
    onChange(searchInput);
  };

  return (
    <div className="Search">
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
