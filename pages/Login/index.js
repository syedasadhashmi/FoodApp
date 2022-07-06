import {
  Grid,
  Container,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import classes from "./login.module.css";

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
        <Container className={classes.tableStyle}>
          <Stack>
            <Typography variant="h4">Admin Panel</Typography>
            <TextField label="Email Address" variant="standard" />
            <TextField label="Password" variant="standard" />
            <Button variant="outlined">Submit</Button>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
