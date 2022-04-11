import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { ThemeProvider } from "styled-components";
import { light, dark, GlobalStyles } from "./theme";

const Home = React.lazy(() => import("./pages/Home"));
const Upload = React.lazy(() => import("./pages/Upload"));
const History = React.lazy(() => import("./pages/History"));
const About = React.lazy(() => import("./pages/About"));
const Login= React.lazy(() => import("./pages/Login"));
const Register= React.lazy(() => import("./pages/Register"));

function App() {
  const [theme, setTheme] = useState({ type: light });

  const toggleTheme = () => {
    if (theme.type === light) {
      setTheme({ type: dark });
    } else {
      setTheme({ type: light });
    }
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme.type}>
        <GlobalStyles />
        <Header toggle={toggleTheme} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="upload" element={<Upload />} />
            <Route path="history" element={<History />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
