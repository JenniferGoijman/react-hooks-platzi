import React, { useState, useEffect, useReducer } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { initialState, favoriteReducer } from "../../reducers/index";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatchFavorites] = useReducer(
    favoriteReducer,
    initialState
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatchFavorites({
      type: !favorites.favorites.find(
        (character) => character.id === favorite.id
      )
        ? "ADD_TO_FAVORITES"
        : "REMOVE_FROM_FAVORITES",
      payload: favorite,
    });
    console.log(favorites);
  };

  return (
    <>
      <div className="Favorites">
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>
      <div className="Characters">
        {characters.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
            onClick={handleClick.bind(this, character)}
          />
        ))}
      </div>
    </>
  );
};

export default Characters;
