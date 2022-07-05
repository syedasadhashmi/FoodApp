import { Box } from "@mui/material";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Box padding="10px" className={classes.footerStyle}>
        <span>Footer</span>
      </Box>
    </footer>
  );
};

export default Footer;
