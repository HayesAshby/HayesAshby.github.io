import { BrowserRouter } from "react-router-dom";
import AppBarWithTheme from "./AppBarWithTheme";
import React from "react";
import Routing from "./routing";
import Footer from "./Footer";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
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
        <Footer />
      </AppBarWithTheme>
    </BrowserRouter>
  );
}
