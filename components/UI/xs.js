import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Container } from "@mui/system";
import classes from "./Header.module.css";
const pages = [
  {
    title: "Home",
    link: "../Home/",
  },
  {
    title: "Orders",
    link: "../Orders/",
  },
  {
    title: "Users",
    link: "../Users/",
  },
  {
    title: "Restaurants",
    link: "../Restaurants/",
  },
];
const Header = () => {
  return (
    <AppBar position="static">
      {/* <Container> */}
      <Toolbar className={classes.toolBarDirection}>
        <div className={classes.navLogo}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <FastfoodIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FoodApp
          </Typography>
        </div>
        <Stack direction="row">
          <Link href="../Home/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="../Orders/">
            <Button color="inherit">Orders</Button>
          </Link>
          <Link href="../Users/">
            <Button color="inherit">Users</Button>
          </Link>
          <Link href="../Restaurants/">
            <Button color="inherit">Restaurants</Button>
          </Link>
        </Stack>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Header;
