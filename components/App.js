import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import useTheme from "@mui/material/styles/useTheme";

import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

import Header from "./Header";
import Footer from "./Footer";

import useThemeMode from "../hooks/useThemeMode";
import sections from "../data/sections";

function App({ children }) {
  const theme = useTheme();
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>{children}</main>
      </Container>
      <Footer sections={sections} />
      <Fab
        onClick={toggleThemeMode}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {themeMode === "dark" ? <LightMode /> : <DarkMode />}
      </Fab>
    </Box>
  );
}

export default App;
