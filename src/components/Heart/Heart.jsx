import React from "react";

const Heart = ({ isLiked, onClick, darkTheme }) => {
  return (
    <img
      src={`/img/icon-heart-${
        isLiked ? "full" : darkTheme ? "dark" : "light"
      }.png`}
      alt=""
      className="Icon"
      onClick={onClick}
    />
  );
};

export default Heart;
