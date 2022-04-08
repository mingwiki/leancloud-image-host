import React, { useState, useContext, useEffect } from "react";
import Header, { ThemeModeContext } from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light, dark, GlobalStyles } from "./theme";

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
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header toggle={toggleTheme} />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
