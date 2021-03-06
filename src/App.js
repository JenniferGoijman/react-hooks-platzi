import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const value = { darkTheme, setDarkTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`App ${darkTheme ? "dark" : "light"}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
