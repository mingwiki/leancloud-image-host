import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    // <ModeContext.Provider value={theme}>
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header />
      <button onClick={toggleTheme}>切换主题</button>
      <Outlet />
      <Footer />
    </ThemeProvider>
    // </ModeContext.Provider>
  );
}

export default App;
