import React from "react";
import "./Favorites.css";

const Favorites = ({ favorites }) => {
  const lengthFavorites = favorites.favorites.length;
  return (
    <div className="Favorites">
      {!!lengthFavorites && <h3>Favorites:</h3>}
      <div className="Names">
        {favorites.favorites.map((favorite, index) => (
          <span key={favorite.id}>
            {lengthFavorites !== 1 && index === lengthFavorites - 1 && (
              <span> & </span>
            )}
            <span> {favorite.name}</span>
            {index < lengthFavorites - 2 && <span>, </span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
