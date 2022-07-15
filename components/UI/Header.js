import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
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
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
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
            <FastfoodIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href={page.link}>{page.title}</Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FastfoodIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Food App
        </Typography>
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          className={classes.toolBarDirection}
        >
          {pages.map((page) => (
            <Button
              key={page.title}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href={page.link}>{page.title}</Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
