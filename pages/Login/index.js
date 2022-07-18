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
import { useState } from "react";
import PopUp from "../../components/UI/PopUp";
// import Image from "next/image";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    setEmail("");
    setPassword("");
    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);
  };
  return (
    <>
      <Header />
      <Grid container className={classes.centerGrid}>
        <Grid item xs={8} height="89vh" display={{ xs: "none", sm: "block" }}>
          <picture>
            <img
              className={classes.loginImg}
              src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2QlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="login-img"
            />
          </picture>
        </Grid>
        <Grid item xs={4} height="88vh">
          <Container className={classes.tableStyle}>
            <form onSubmit={submitHandler}>
              <Stack direction="column" spacing={3}>
                <div className={classes.center}>
                  <Typography variant="h4">Admin Panel</Typography>
                </div>
                <TextField
                  label="Email Address"
                  required
                  value={email}
                  type="email"
                  onChange={emailHandler}
                  variant="standard"
                />
                <TextField
                  label="Password"
                  required
                  value={password}
                  onChange={passwordHandler}
                  variant="standard"
                  type="password"
                />
                <div className={classes.center}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </div>
              </Stack>
            </form>
            {isSubmit && <PopUp />}
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
