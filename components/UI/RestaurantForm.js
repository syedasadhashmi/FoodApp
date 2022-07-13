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
const RestaurantTypeObj = [
  {
    value: "Chinese",
  },
  {
    value: "Italian",
  },
  {
    value: "Fast Food",
  },
];
const RestaurantForm = () => {
  const [resType, setResType] = useState("Fast Food");
  const [phone, setPhone] = useState("");

  const handleNumOnChange = (value) => {
    setPhone(value);
  };

  const handleChange = (event) => {
    setResType(event.target.value);
  };
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <CardHeader title="Add Restaurant" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Restaurant Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-select-restaurantType"
                select
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
                fullWidth
                helperText="Write full address"
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPhoneNumber
                label="Phone #"
                defaultCountry={"pa"}
                onChange={handleNumOnChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Restaurant Email"
                required
                variant="outlined"
                fullWidth
                type="email"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ float: "right", marginRight: "10px" }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="outlined">Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default RestaurantForm;
