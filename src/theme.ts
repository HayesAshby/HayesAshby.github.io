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
  primary: {
    main: "#10502e"
  },
  secondary: {
    main: "#501032"
  },
  // success: {
  //   main: "#5aa93f"
  // },
  // warning: {
  //   main: "#e3ca4f"
  // },
  // error: {
  //   main: "#cf4963"
  // }
};

const darkTheme: PaletteOptions = {
  // palette values for dark mode
  primary: {
    main: "#f50057"
  },
  // success: {
  //   main: "#c5ffb4"
  // },
  // warning: {
  //   main: "#ffeeb4"
  // },
  // error: {
  //   main: "#ffb4c5"
  // }
};

export default getDesignTokens;
