import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import PopUp from "./PopUp";

const GenderObj = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
];
const UserForm = () => {
  const [gender, setGender] = useState("Male");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const positionHandler = (e) => {
    setPosition(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const submitHandler = (event) => {
    setIsSubmit(true);
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setAge("");
    setPosition("");
    setAddress("");
    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);
  };
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <form onSubmit={submitHandler}>
          <CardHeader title="Add User" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="First Name"
                  required
                  onChange={firstNameHandler}
                  value={firstName}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Last Name"
                  required
                  onChange={lastNameHandler}
                  value={lastName}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  label="Age"
                  required
                  variant="outlined"
                  onChange={ageHandler}
                  InputProps={{
                    inputProps: {
                      max: 60,
                      min: 18,
                    },
                  }}
                  value={age}
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  id="outlined-select-Gennder"
                  select
                  label="Select"
                  value={gender}
                  onChange={handleChange}
                  helperText="Please select Gender"
                  fullWidth
                >
                  {GenderObj.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  label="Position"
                  required
                  onChange={positionHandler}
                  value={position}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  required
                  onChange={addressHandler}
                  value={address}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ float: "right", marginRight: "10px" }}>
            <Link href="../Users">
              <Button variant="outlined">Cancel</Button>
            </Link>
            <Button variant="outlined" type="submit">
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
      {isSubmit && <PopUp />}
    </Container>
  );
};

export default UserForm;
