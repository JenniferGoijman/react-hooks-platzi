import React, { useState, useEffect, useReducer, useMemo } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Favorites from "../Favorites/Favorites";
import { initialState, favoriteReducer } from "../../reducers/index";
import "./Characters.css";
import SearchCharacters from "../SearchCharacters/SearchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatchFavorites] = useReducer(
    favoriteReducer,
    initialState
  );
  const [search, setSearch] = useState("");

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
  };

  const handleSearch = (searchInput) => {
    setSearch(searchInput.current.value);
  };

  const filteredCharacteres = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );
  return (
    <>
      <SearchCharacters value={search} onChange={handleSearch} />
      <Favorites favorites={favorites} />
      <div className="Characters">
        {filteredCharacteres.map((character) => (
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
