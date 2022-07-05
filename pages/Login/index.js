import { Grid } from "@mui/material";
import classes from "./login.module.css";
import { Container } from "@mui/material";
const Login = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          className={classes.loginImg}
          src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2QlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="login-img"
        />
      </Grid>
      <Grid item xs={6}>
        <Container>Admin Panel</Container>
      </Grid>
    </Grid>
  );
};

export default Login;
