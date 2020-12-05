import React, { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default Characters;
