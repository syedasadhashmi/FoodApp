import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DataTable from "../../components/UI/DataTable";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../../Redux/Restaurants/restaurantsActions";

const columnsData = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "RestaurantName",
    headerName: "RestaurantName",
    width: 150,
    editable: true,
  },
  { field: "RestaurantType", headerName: "RestaurantType", width: 150 },
  { field: "RestaurantAddress", headerName: "RestaurantAddress", width: 150 },
  {
    field: "PhoneNumber",
    headerName: "PhoneNumber",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
  },
  {
    field: "Email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
  },
  {
    field: "Action",
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
    field: "Add Menu",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <>
          <IconButton variant="contained" color="primary">
            <Link href="../Menu/">
              <RestaurantMenuIcon />
            </Link>
          </IconButton>
        </>
      );
    },
  },
];
const dataObj = {
  title: "Restaurants",
  link: "../Restaurants/addRestaurants",
};
import data from "../../data.json";
const Restaurants = () => {
  const { restaurants } = useSelector((items) => items.restaurantsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useeffect");
    dispatch(fetchRestaurants(data));
  }, []);
  return (
    <Layout>
      <DataTable
        props={restaurants}
        columnsData={columnsData}
        dataObj={dataObj}
      />
    </Layout>
  );
};

export default Restaurants;
