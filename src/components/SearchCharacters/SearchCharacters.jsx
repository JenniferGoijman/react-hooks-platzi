import React from "react";

const SearchCharacters = ({ value, onChange }) => {
  const handleSearch = (event) => {
    onChange(event);
  };

  return (
    <div className="Search">
      <input type="text" value={value} onChange={handleSearch} />
    </div>
  );
};

export default SearchCharacters;
