import React, { useEffect, useState } from "react";
import { IconButton, Avatar } from "@mui/material";
import DataTable from "../../components/UI/DataTable";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRestaurants,
  fetchRestaurantsData,
} from "../../Redux/Restaurants/restaurantsActions";
import data from "../../Redux/Restaurants/data.json";
import axios from "axios";
import { apiUrl } from "../../utils/constant";
import Login from "../Login";

const dataObj = {
  title: "Restaurants",
  link: "../Restaurants/addRestaurants",
};
const Restaurants = (handleSubmit) => {
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector(
    (items) => items.restaurantsReducer
  );
  const { isLogin } = useSelector((state) => state.loginReducer);

  // const handleSubmit = (GridCellEditCommitParams) => {
  //   console.log(GridCellEditCommitParams);
  //   axios
  //     .put(
  //       `http://10.4.41.164:8080/vendor-service/vendor/?vendorId=${GridCellEditCommitParams.id}`,
  //       {
  //         restaurantTitle: GridCellEditCommitParams.value,
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // };
  console.log(restaurants);
  console.log(loading);
  console.log(error);

  const columnsData = [
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 150,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    {
      field: "restaurantTitle",
      headerName: "RestaurantName",
      width: 200,
      editable: true,
      startRowEditMode: (cellValues) => {
        console.log(cellValues);
      },
    },
    { field: "location", headerName: "Address", width: 200 },
    {
      field: "contactNumber",
      headerName: "ContactNumber",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "email",
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
              onClick={() => deleteHandler(cellValues.id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
    {
      field: "Add Menu Group",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <Link href={`../Menu/${cellValues.id}`}>
              <IconButton variant="contained" color="primary">
                <RestaurantMenuIcon />
              </IconButton>
            </Link>
          </>
        );
      },
    },
  ];
  const deleteHandler = (rowId) => {
    axios
      .delete(`${apiUrl}/vendor-service/vendor/?vendorId=${rowId}`, {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  useEffect(() => {
    console.log("useeffect");
    dispatch(fetchRestaurants());
  }, []);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <DataTable
        props={restaurants ? restaurants : []}
        columnsData={columnsData}
        dataObj={dataObj}
      />
    </Layout>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};

export default Restaurants;
