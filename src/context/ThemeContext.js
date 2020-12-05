import React from "react";

const ThemeContext = React.createContext({
  darkTheme: false,
  setDarkTheme: () => {},
});

export default ThemeContext;
