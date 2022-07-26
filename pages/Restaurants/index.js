import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DataTable from '../../components/UI/DataTable';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRestaurants,
  fetchRestaurantsData,
} from '../../Redux/Restaurants/restaurantsActions';
import data from '../../Redux/Restaurants/data.json';
import { fetchMenu } from '../../Redux/Menu/menuActions';

const dataObj = {
  title: 'Restaurants',
  link: '../Restaurants/addRestaurants',
};
const Restaurants = () => {
  const { restaurants, loading, error } = useSelector(
    (items) => items.restaurantsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useeffect');
    dispatch(fetchRestaurants());
  }, []);
  console.log(restaurants);
  console.log(loading);
  console.log(error);
  const columnsData = [
    { field: 'thumbnail', headerName: 'Thumbnail', width: 100 },
    {
      field: 'restaurantTitle',
      headerName: 'RestaurantName',
      width: 150,
      editable: true,
    },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'contactNumber',
      headerName: 'ContactNumber',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'Action',
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            {/* <IconButton
            variant="contained"
            color="primary"
            // onClick={(event) => {
            //   handleClick(event, cellValues);
            // }}
          >
            <EditIcon />
          </IconButton> */}
            <IconButton
              variant="contained"
              color="primary"
              // onClick={(event) => {
              //   handleClick(event, cellValues);
              // }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
    {
      field: 'Add Menu',
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <Link href={`../Menu/${cellValues.id}`}>
              <IconButton
                variant="contained"
                color="primary"
                onClick={() => dispatch(fetchMenu())}
              >
                <RestaurantMenuIcon />
              </IconButton>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <Layout>
      <DataTable props={data} columnsData={columnsData} dataObj={dataObj} />
    </Layout>
  );
};

export default Restaurants;
