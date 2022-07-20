import React from "react";
import classes from "./form.module.css";

const ErrorPopup = () => {
  return (
    <div className={classes.formStyle}>
      <p className={classes.innerFormStyle}>Incorrect email or password</p>
    </div>
  );
};

export default ErrorPopup;
