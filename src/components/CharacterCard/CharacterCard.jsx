import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`CharacterCard ${darkTheme ? "dark" : "light"}`}>
      <div className="Header">
        <h2 key={character.id}>{character.name}</h2>
        <img
          src={`/img/icon-heart-${isLiked ? "full" : "empty"}.png`}
          alt=""
          className="Icon"
          onClick={handleLike}
        />
      </div>
      <img src={character.image} alt="" className="Image" />
    </div>
  );
};

export default CharacterCard;
