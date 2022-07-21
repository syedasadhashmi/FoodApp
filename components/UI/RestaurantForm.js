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
import MuiPhoneNumber from "material-ui-phone-number";
import Link from "next/link";
import PopUp from "./PopUp";
import axios from "axios";

const RestaurantForm = () => {
  const [phone, setPhone] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const session_url = "http://10.4.40.243:8080/user-service/vendor/register";
  const handleNumOnChange = (event) => {
    setPhone(event);
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
  const restaurantPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const thumbnailHandler = (event) => {
    setThumbnail(event.target.value);
  };
  const longitudeHandler = (event) => {
    setLongitude(event.target.value);
  };
  const latitudeHandler = (event) => {
    setLatitude(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .post(session_url, {
        email: restaurantEmail,
        password: password,
        restaurantTitle: restaurantName,
        contactNumber: phone,
        thumbnail: thumbnail,
        address: address,
        longitude: longitude,
        latitude: latitude,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    setSubmit(true);
    event.preventDefault();

    setPhone("");
    setRestaurantEmail("");
    setRestaurantName("");
    setAddress("");
    setThumbnail("");
    setLatitude("");
    setLongitude("");

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
              <Grid item xs={12} md={6}>
                <TextField
                  label="Password"
                  required
                  type="password"
                  variant="outlined"
                  onChange={restaurantPasswordHandler}
                  value={password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                  label="Thumbnail"
                  required
                  variant="outlined"
                  onChange={thumbnailHandler}
                  value={thumbnail}
                  fullWidth
                  helperText="Write thumbnail text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Longitude"
                  required
                  variant="outlined"
                  type="number"
                  onChange={longitudeHandler}
                  value={longitude}
                  fullWidth
                  helperText="Write longitude"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Latitude"
                  required
                  variant="outlined"
                  type="number"
                  onChange={latitudeHandler}
                  value={latitude}
                  fullWidth
                  helperText="Write latitude"
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
