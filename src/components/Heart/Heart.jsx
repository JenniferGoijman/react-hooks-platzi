import React from "react";

const Heart = ({ isLiked, handleLike, darkTheme }) => {
  return (
    <img
      src={`/img/icon-heart-${
        isLiked ? "full" : darkTheme ? "dark" : "light"
      }.png`}
      alt=""
      className="Icon"
      onClick={handleLike}
    />
  );
};

export default Heart;
