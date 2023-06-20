import { PaletteMode, PaletteOptions, ThemeOptions } from "@mui/material";

const customComponentsTheme: ThemeOptions["components"] = {
  MuiTextField: {
    defaultProps: {
      // The props to change the default for.
      // id: "filled-basic",
      variant: "filled", // No more ripple, on the whole application 💣!
    },
  },
  MuiButton: {
    defaultProps: {
      // The props to change the default for.
      // id: "filled-basic",
      variant: "contained", // No more ripple, on the whole application 💣!
    },
  },
  MuiStack: {
    defaultProps: {
      spacing: 2,
    },
  },
};

/**
 * Gets Revelvant Tokens to USSA.
 * @param {PaletteMode} mode "light" or "dark"
 * @return {ThemeOptions}
 */
const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  components: customComponentsTheme,
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },
});

const lightTheme: PaletteOptions = {
  // palette values for light mode
  primary: {
    main: "#3f5aa9",
  },
  secondary: {
    main: "#595e72",
  },
  success: {
    main: "#5aa93f",
  },
  warning: {
    main: "#e3ca4f",
  },
  error: {
    main: "#cf4963",
  },
};

const darkTheme: PaletteOptions = {
  // palette values for dark mode
  primary: {
    main: "#b4c5ff",
  },
  secondary: {
    main: "#c1c5dd",
  },
  success: {
    main: "#c5ffb4",
  },
  warning: {
    main: "#ffeeb4",
  },
  error: {
    main: "#ffb4c5",
  },
};

export default getDesignTokens;
