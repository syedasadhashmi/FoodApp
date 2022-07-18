import React, { useState } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import MuiPhoneNumber from "material-ui-phone-number";
import Link from "next/link";
import PopUp from "./PopUp";
const RestaurantTypeObj = [
  {
    value: "Chinese",
  },
  {
    value: "Italian",
  },
  {
    value: "Turkish",
  },
];
const RestaurantForm = () => {
  const [resType, setResType] = useState("Italian");
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleNumOnChange = (event) => {
    setPhone(event);
  };

  const handleChange = (event) => {
    setResType(event.target.value);
  };
  const restaurantNameHandler = (e) => {
    setRestaurantName(e.target.value);
  };
  const restaurantAddressHandler = (event) => {
    setAddress(event.target.value);
  };
  const restaurantEmailHandler = (event) => {
    setRestaurantEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmit(true);
    event.preventDefault();
    console.log(phone, address, restaurantName, resType, restaurantEmail);
    setPhone("");
    setRestaurantEmail("");
    setRestaurantName("");
    setAddress("");
    setTimeout(() => {
      setSubmit(false);
    }, 1000);
  };

  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader title="Add Restaurant" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Restaurant Name"
                  required
                  variant="outlined"
                  value={restaurantName}
                  fullWidth
                  onChange={restaurantNameHandler}
                  onInput={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-restaurantType"
                  select
                  required
                  label="Select"
                  value={resType}
                  onChange={handleChange}
                  helperText="Please select Restaurant Type"
                  fullWidth
                >
                  {RestaurantTypeObj.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  required
                  variant="outlined"
                  onChange={restaurantAddressHandler}
                  value={address}
                  fullWidth
                  helperText="Write full address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MuiPhoneNumber
                  label="Phone #"
                  required
                  defaultCountry={"pa"}
                  value={phone}
                  onChange={handleNumOnChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Restaurant Email"
                  required
                  variant="outlined"
                  onChange={restaurantEmailHandler}
                  value={restaurantEmail}
                  fullWidth
                  type="email"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ float: "right", marginRight: "10px" }}>
            <Link href="../Restaurants/">
              <Button variant="outlined">Cancel</Button>
            </Link>
            <Button variant="outlined" type="submit">
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
      {submit && <PopUp />}
    </Container>
  );
};

export default RestaurantForm;
