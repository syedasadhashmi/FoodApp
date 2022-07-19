import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
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
