import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="Favorites">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
    </div>
  );
};

export default Favorites;
