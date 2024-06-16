import { DefaultTheme, useTheme as useAppTheme } from "react-native-paper";

const BOLD = ["display", "headline"];
const REGULAR = ["title"];

const fonts = Object.fromEntries(
  Object.entries(DefaultTheme.fonts).map(([variantName, variantProps]) => [
    variantName,
    {
      ...variantProps,
      fontFamily: BOLD.find((f) => variantName.toLowerCase().includes(f))
        ? "Inter_SemiBold"
        : REGULAR.find((f) => variantName.toLowerCase().includes(f))
          ? "Inter_Regular"
          : "Inter_Light",
    },
  ]),
);

export const theme = {
  ...DefaultTheme,
  fonts: {
    ...fonts,
    default: {
      fontFamily: "Inter_Regular",
      fontSize: 16,
    },
    titleSmall: {
      fontFamily: "Inter_Regular",
      fontSize: 14,
      fontWeight: "400",
      letterSpacing: 0.1,
      lineHeight: 20,
    },
    titleMedium: {
      fontFamily: "Inter_Medium",
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: 0.15,
      lineHeight: 24,
    },
    titleLarge: {
      fontFamily: "Inter_SemiBold",
      fontSize: 24,
      fontWeight: "600",
      letterSpacing: 0,
      lineHeight: 28,
    },
    labelLarge: {
      fontFamily: "Inter_Medium",
      fontSize: 14,
      fontWeight: "500",
      letterSpacing: 0.1,
      lineHeight: 22,
    },
  },
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    accent: "#65A3B8",
    primary: {
      100: "#E4F2F5",
      200: "#C9E5EB",
      300: "#AFD5E2",
      400: "#8ABCCD",
      500: "#65A3B8",
      600: "#528694",
      700: "#3F6970",
      800: "#2C4B4D",
      900: "#192E2A",
    },

    title: {
      100: "#E3E6E7",
      200: "#C6CCCF",
      300: "#A8B3B8",
      400: "#8B99A0",
      500: "#6E8088",
      600: "#50576F",
      700: "#333D57",
      800: "#16262B",
      900: "#0B1316",
    },

    white: "#ffffff",
    black: "#000000",

    outline: "#CFD5DB",

    elevation: {
      ...DefaultTheme.colors.elevation,
      level2: "#ffffff",
    },

    onSurfaceVariant: "#808080",

    gray: {
      50: "#F2F2F2",
      100: "#E0E0E0",
      200: "#C1C1C1",
      300: "#A3A3A3",
      350: "#909090",
      400: "#808080",
      450: "#707070",
      500: "#606060",
      600: "#505050",
      700: "#404040",
      800: "#4D4D4D",
      900: "#303030",
    },
    success: {
      50: "#DEF7EC",
      100: "#A4FFA9",
      200: "#0FE11C",
      300: "#07BD12",
      400: "#04A610",
      500: "#018A0E",
      600: "#00750C",
      700: "#005F0A",
      800: "#004B08",
      900: "#003806",
    },
    warning: {
      50: "#FFF7E1",
      100: "#FFE69C",
      200: "#FFC225",
      300: "#FFB700",
      400: "#E6A300",
      500: "#CC8F00",
      600: "#B37A00",
      700: "#996600",
      800: "#804F00",
      900: "#663900",
    },
    danger: {
      50: "#FFE2E2",
      100: "#FF7979",
      250: "#D93737",
      200: "#F12D2D",
      400: "#B22222",
      500: "#8B0000",
      600: "#800000",
      700: "#660000",
      800: "#4B0000",
      900: "#330000",
    },
    green: {
      50: "#EAFFE3",
      100: "#D2FFBF",
      200: "#A8FF7D",
      300: "#7FFF3C",
      400: "#65E732",
      500: "#4AC021",
      600: "#3FA31B",
      700: "#338615",
      800: "#28690F",
      900: "#1C4C0A",
    },
  },
};

type AppThemeType = typeof theme;

const useTheme = () => useAppTheme<AppThemeType>();

export { AppThemeType, useTheme };
