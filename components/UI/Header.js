import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FastfoodIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FoodApp
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Orders</Button>
          <Button color="inherit">Users</Button>
          <Button color="inherit">Restaurants</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;