import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  blue: {
    100: "#d1dbf3",
    200: "#a3b7e6",
    300: "#7592da",
    400: "#476ecd",
    500: "#194ac1",
    600: "#143b9a",
    700: "#0f2c74",
    800: "#0a1e4d",
    900: "#050f27",
  },
  red: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  green: {
    100: "#e2f8dd",
    200: "#c5f1bb",
    300: "#a7e99a",
    400: "#8ae278",
    500: "#6ddb56",
    600: "#57af45",
    700: "#418334",
    800: "#2c5822",
    900: "#162c11",
  },
  neutral: {
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#f8f8f8",
    400: "#f6f6f6",
    500: "#f4f4f4",
    600: "#c3c3c3",
    700: "#929292",
    800: "#626262",
    900: "#313131",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.blue[800],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Cqsr", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 24,
    },
    h5: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Cqsr", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
