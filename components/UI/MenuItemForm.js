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
import Link from "next/link";
import PopUp from "./PopUp";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { apiUrl } from "../../utils/constant";
import { useSelector } from "react-redux";
const onDisplayObj = [
  {
    value: "true",
  },
  {
    value: "false",
  },
];
const MenuItemForm = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [onDisplay, setOnDisplay] = useState("true");
  const [isSubmit, setIsSubmit] = useState(false);
  const { id } = useSelector((state) => state.menuDishesReducer);
  console.log(id);
  const session_url = `${apiUrl}/vendor-service/catalogItem/menuGroup?menuGroupId=${id}`;

  const handleChange = (event) => {
    setOnDisplay(event.target.value);
  };
  const imageHandler = (event) => {
    setImage(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = (e) => {
    axios
      .post(session_url, {
        description: description,
        image: image,
        price: price,
        onDisplay: onDisplay,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    setIsSubmit(true);
    e.preventDefault();
    setImage("");
    setPrice("");
    setDescription("");
    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);
  };
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <form onSubmit={submitHandler}>
          <CardHeader title="Add Menu Catalog" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Dish Name"
                  required
                  value={description}
                  onChange={descriptionHandler}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="outlined-select-DishType"
                  select
                  label="Select"
                  value={onDisplay}
                  onChange={handleChange}
                  helperText="Please select Dish Type"
                  fullWidth
                >
                  {onDisplayObj.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Price"
                  required
                  value={price}
                  onChange={priceHandler}
                  variant="outlined"
                  type="number"
                  InputProps={{ inputProps: { min: 1 } }}
                  fullWidth
                  helperText="Enter dish price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Image"
                  required
                  variant="outlined"
                  value={image}
                  onChange={imageHandler}
                  fullWidth
                  helperText="Image Url"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ float: "right", marginRight: "10px" }}>
            <Link href="../Menu">
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

export default MenuItemForm;
