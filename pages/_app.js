import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "../Redux/store";
// import ProtectedRoutes from "../components/UI/ProtectedRoutes";
function MyApp({ Component, pageProps, router }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F24C4C",
        light: "#ff7961",
        dark: "#ba000d",
      },
    },
  });
  // console.log(router.push);
  return (
    // <ProtectedRoutes router={router}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
    // </ProtectedRoutes>
  );
}

export default MyApp;
