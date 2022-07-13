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
const DishTypeObj = [
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
const MenuForm = () => {
  const [dishType, setDishType] = useState("Chinese");
  const [value, setValue] = useState("");

  const handleMultiLineChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (event) => {
    setDishType(event.target.value);
  };
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <CardHeader title="Add Menu" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Dish Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-select-DishType"
                select
                label="Select"
                value={dishType}
                onChange={handleChange}
                helperText="Please select Dish Type"
                fullWidth
              >
                {DishTypeObj.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Dish Price"
                required
                variant="outlined"
                type="number"
                fullWidth
                helperText="Enter dish price"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Restaurant Name"
                required
                variant="outlined"
                fullWidth
                helperText="AutoFilled"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Dish Id"
                required
                variant="outlined"
                fullWidth
                type="Number"
                helperText="Auto Generated"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={value}
                fullWidth
                onChange={handleMultiLineChange}
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

export default MenuForm;
