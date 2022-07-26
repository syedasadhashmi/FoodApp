import React, { useState } from 'react';
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
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import PopUp from './PopUp';
const DishTypeObj = [
  {
    value: 'Chinese',
  },
  {
    value: 'Italian',
  },
  {
    value: 'Turkish',
  },
];
const MenuForm = () => {
  const [dishType, setDishType] = useState('Chinese');
  const [value, setValue] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishId, setDishId] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const session_url = '';

  const handleMultiLineChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange = (event) => {
    setDishType(event.target.value);
  };
  const dishNameHandler = (event) => {
    setDishName(event.target.value);
  };
  const dishPriceHandler = (event) => {
    setDishPrice(event.target.value);
  };
  const dishIdHandler = (event) => {
    setDishId(event.target.value);
  };
  const restaurantNameHandler = (event) => {
    setRestaurantName(event.target.value);
  };

  const submitHandler = (e) => {
    axios
      .post(session_url, {
        description: dishName,
        image: restaurantName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    setIsSubmit(true);
    e.preventDefault();
    setRestaurantName('');
    setDishId('');
    setDishPrice('');
    setDishName('');
    setValue('');
    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);
  };
  return (
    <Container sx={{ height: '85vh', marginTop: '20px', marginBottom: '20px' }}>
      <Card>
        <form onSubmit={submitHandler}>
          <CardHeader title="Add Menu" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Dish Name"
                  required
                  value={dishName}
                  onChange={dishNameHandler}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Dish Price"
                  required
                  value={dishPrice}
                  onChange={dishPriceHandler}
                  variant="outlined"
                  type="number"
                  InputProps={{ inputProps: { min: 2 } }}
                  fullWidth
                  helperText="Enter dish price"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Dish Id"
                  required
                  variant="outlined"
                  value={dishId}
                  onChange={dishIdHandler}
                  fullWidth
                  type="Number"
                  helperText="Auto Generated"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  label="Restaurant Name"
                  required
                  variant="outlined"
                  value={restaurantName}
                  onChange={restaurantNameHandler}
                  fullWidth
                  helperText="AutoFilled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  required
                  maxRows={4}
                  value={value}
                  fullWidth
                  onChange={handleMultiLineChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ float: 'right', marginRight: '10px' }}>
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

export default MenuForm;
