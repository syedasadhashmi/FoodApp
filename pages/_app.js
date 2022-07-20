import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F24C4C",
        light: "#ff7961",
        dark: "#ba000d",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
