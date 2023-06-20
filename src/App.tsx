import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBarWithTheme from "./AppBarWithTheme";
import NoMatch from "./pages/NoMatch";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import getDesignTokens from "./theme";
import React from "react";
import Routing from "./routing";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

/**
 * App.
 * @return {any}
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppBarWithTheme>
        <Routing />
      </AppBarWithTheme>
    </BrowserRouter>
  );
}
