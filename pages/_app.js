import "../styles/globals.css";

import React from "react";

import { SnackbarProvider } from "notistack";

import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import useThemeMode from "../hooks/useThemeMode";

import App from "../components/App";

import Head from "next/head";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7fa08",
    },
    background: {
      default: "#5a5a5a",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f7fa08",
    },
    background: {
      default: "#c1c1c1",
    },
  },
});

function MainApp({ Component, pageProps }) {
  const [browserModeSet, setBrowserModeSet] = React.useState(false);
  const { themeMode, setThemeMode } = useThemeMode();
  const matches = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    if (!browserModeSet) {
      if (matches) {
        setThemeMode("dark");
      } else {
        setThemeMode("light");
      }
      setBrowserModeSet(true);
    }
  }, [matches, browserModeSet, setThemeMode]);

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <Head>
        <title>Deviren Elektrotechniek</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Uw elektrotechnisch installatiebedrijf"
        />
        <meta name="theme-color" content="#f7fa08" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <App>
            <Component {...pageProps} />
          </App>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MainApp;
