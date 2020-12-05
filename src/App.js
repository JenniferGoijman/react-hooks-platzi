import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Characters from "./components/Characters";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  console.log(theme);
  return (
    <ThemeContext.Provider value={value}>
      <div className={`App ${theme}`}>
        <Header />
        <Characters />
        <h1>Hola Mundo</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
