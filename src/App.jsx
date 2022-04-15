import React, { useState, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { light, dark, GlobalStyles } from "./theme";
import { Spin } from "antd";

const Home = React.lazy(() => import("./pages/Home"));
const History = React.lazy(() => import("./pages/History"));
const About = React.lazy(() => import("./pages/About"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const CenterSpin = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
    <HashRouter>
      <ThemeProvider theme={theme.type}>
        <GlobalStyles />
        <Header toggle={toggleTheme} />
        <Suspense
          fallback={
            <CenterSpin spinning={true} size="large" tip="页面正在加载中" />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
