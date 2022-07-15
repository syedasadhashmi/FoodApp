import {
  Grid,
  Container,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import classes from "./login.module.css";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
// import Image from "next/image";
const Login = () => {
  return (
    <>
      <Header />
      <Grid container className={classes.centerGrid}>
        <Grid item xs={6} height="88vh" display={{ xs: "none", sm: "flex" }}>
          <picture>
            <img
              className={classes.loginImg}
              src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2QlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="login-img"
            />
          </picture>
        </Grid>
        <Grid item xs={6} height="88vh">
          <Container className={classes.tableStyle}>
            <Stack direction="column" spacing={3}>
              <div className={classes.center}>
                <Typography variant="h4">Admin Panel</Typography>
              </div>
              <TextField label="Email Address" required variant="standard" />
              <TextField
                label="Password"
                required
                variant="standard"
                type="password"
              />
              <div className={classes.center}>
                <Button variant="contained">Submit</Button>
              </div>
            </Stack>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
