import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
//import "../styles/globals.css";
import createEmotionCache from "src/utils/createEmotionCache";
import lightTheme from "src/styles/theme/lightTheme";
import MainLayout from "src/components/layouts";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
