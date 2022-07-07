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

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Container sx={{ height: "83vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <CardHeader title="Add User" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Age"
                required
                variant="outlined"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
              <TextField
                label="Position"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                required
                variant="outlined"
                fullWidth
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

export default UserForm;
