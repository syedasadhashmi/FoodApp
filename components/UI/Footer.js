import { Box, AppBar } from "@mui/material";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <AppBar position="static">
      <Box padding="10px" className={classes.footerStyle}>
        <span>Footer</span>
      </Box>
    </AppBar>
  );
};

export default Footer;
