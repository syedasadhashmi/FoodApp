import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "../Redux/store";
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
