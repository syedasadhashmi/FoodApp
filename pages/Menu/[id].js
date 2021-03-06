import React from "react";
import DataTable from "../../components/UI/DataTable";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";

const rowData = [
  {
    id: 1,
    DishName: "Manchurian",
    DishType: "Chinese",
    DishPrice: 35,
    DishDescription: "Manchorian is a chinese dish.",
  },
  {
    id: 2,
    DishName: "Manchaou Soup",
    DishType: "Chinese",
    DishPrice: 42,
    DishDescription: "Manchaou Soup is a chinese dish",
  },
  {
    id: 3,
    DishName: "Chinese Rice",
    DishType: "Chinese",
    DishPrice: 45,
    DishDescription: "Chinese Rice is a chinese dish",
  },
  {
    id: 4,
    DishName: "Borek",
    DishType: "Turkish",
    DishPrice: 16,
    DishDescription: "Borek is a turkish dish",
  },
  {
    id: 5,
    DishName: "Menemen",
    DishType: "Turkish",
    DishPrice: 20,
    DishDescription: "Menemen is a turkish dish",
  },
  {
    id: 6,
    DishName: "Pizza",
    DishType: "Italian",
    DishPrice: 150,
    DishDescription: "Pizza is an Italian dish",
  },
  {
    id: 7,
    DishName: "Pasta",
    DishType: "Italian",
    DishPrice: 44,
    DishDescription: "Pasta is an Italian dish",
  },
  {
    id: 8,
    DishName: "Spaghetti",
    DishType: "Italian",
    DishPrice: 36,
    DishDescription: "Spaghetti is an Italian dish",
  },
  {
    id: 9,
    DishName: "Lasagna",
    DishType: "Italian",
    DishPrice: 65,
    DishDescription: "Lasagna is an Italian dish",
  },
];
const columnsData = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "DishName",
    headerName: "DishName",
    width: 150,
    editable: true,
  },
  { field: "DishType", headerName: "DishType", width: 150 },
  { field: "DishPrice", headerName: "DishPrice", width: 150 },
  {
    field: "DishDescription",
    headerName: "DishDescription",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
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
];
const dataObj = {
  title: "Menu",
  link: "../Menu/addMenu",
};
const Menu = () => {
  return (
    <Layout>
      <DataTable props={rowData} columnsData={columnsData} dataObj={dataObj} />
    </Layout>
  );
};

export default Menu;
