import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DataTable from "../../components/UI/DataTable";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

// const rowData = [
//   {
//     id: 1,
//     RestaurantName: "Ginsoy",
//     RestaurantType: "Chinese",
//     RestaurantAddress: "Block F North Nazimabad",
//     PhoneNumber: "0900786601",
//     Email: "www.ginsoy.com",
//   },
//   {
//     id: 2,
//     RestaurantName: "Pompei",
//     RestaurantType: "Italian",
//     RestaurantAddress: "Zamzama Block k",
//     PhoneNumber: "0900786601",
//     Email: "www.Pompei.com",
//   },
//   {
//     id: 3,
//     RestaurantName: "Solen",
//     RestaurantType: "Turkish",
//     RestaurantAddress: "Dolmen Mall Clifton",
//     PhoneNumber: "0900786601",
//     Email: "www.Solen.com",
//   },
//   {
//     id: 4,
//     RestaurantName: "Zeytin",
//     RestaurantType: "Turkish",
//     RestaurantAddress: "Safa Residency Shaheed-e-Millat",
//     PhoneNumber: "0900786601",
//     Email: "www.zeytin.com",
//   },
//   {
//     id: 5,
//     RestaurantName: "Pomo",
//     RestaurantType: "Italian",
//     RestaurantAddress: "44c lane",
//     PhoneNumber: "0900786601",
//     Email: "www.pomo.com",
//   },
//   {
//     id: 6,
//     RestaurantName: "Amichi Pizeria",
//     RestaurantType: "Italian",
//     RestaurantAddress: "44c lane",
//     PhoneNumber: "0900786601",
//     Email: "www.Amichi.com",
//   },
//   {
//     id: 7,
//     RestaurantName: "Bam-Bou",
//     RestaurantType: "Chinese",
//     RestaurantAddress: "D-61 North Nazimabad",
//     PhoneNumber: "0900786601",
//     Email: "www.BamBou.com",
//   },
//   {
//     id: 8,
//     RestaurantName: "Imperial court",
//     RestaurantType: "Chinese",
//     RestaurantAddress: "D-61 North Nazimabad",
//     PhoneNumber: "0900786601",
//     Email: "www.imperialCourt.com",
//   },
//   {
//     id: 9,
//     RestaurantName: "Golden Dragon",
//     RestaurantType: "Chinese",
//     RestaurantAddress: "F-31 Clifton",
//     PhoneNumber: "0900786601",
//     Email: "www.GoldenDragon.com",
//   },
// ];
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
import { useSelector, useDispatch } from "react-redux";
import { restaurants } from "../../Redux/Restaurants/restaurantsActions";
const Restaurants = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((items) => items.restaurantsReducer);
  useEffect(() => {
    dispatch(restaurants());
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
