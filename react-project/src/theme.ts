import { PaletteMode, PaletteOptions, ThemeOptions } from "@mui/material";

const customComponentsTheme: ThemeOptions["components"] = {
  MuiStack: {
    defaultProps: {
      spacing: 2
    }
  }
};

/**
 * Gets Revelvant Tokens.
 * @param {PaletteMode} mode "light" or "dark"
 * @return {ThemeOptions}
 */
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  components: customComponentsTheme,
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme)
  }
});

const lightTheme: PaletteOptions = {
  // palette values for light mode
};

const darkTheme: PaletteOptions = {
  // palette values for dark mode
};

export default getDesignTokens;
