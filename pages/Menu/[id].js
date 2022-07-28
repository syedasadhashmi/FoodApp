import React, { useEffect } from "react";
import DataTable from "../../components/UI/DataTable";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchMenu } from "../../Redux/MenuGroup/menuActions";
import data2 from "../../Redux/MenuGroup/data2.json";
import axios from "axios";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Link from "next/link";

// const rowData = [
//   {
//     id: 'description',
//     description: 'Chowmein',
//     image: 'https://unsplash.com/photos/fdPk6HdzomM',
//   },
//   // {
//   //   id: 1,
//   //   DishName: 'Manchurian',
//   //   DishType: 'Chinese',
//   //   DishPrice: 35,
//   //   DishDescription: 'Manchorian is a chinese dish.',
//   // },
//   // {
//   //   id: 2,
//   //   DishName: 'Manchaou Soup',
//   //   DishType: 'Chinese',
//   //   DishPrice: 42,
//   //   DishDescription: 'Manchaou Soup is a chinese dish',
//   // },
//   // {
//   //   id: 3,
//   //   DishName: 'Chinese Rice',
//   //   DishType: 'Chinese',
//   //   DishPrice: 45,
//   //   DishDescription: 'Chinese Rice is a chinese dish',
//   // },
//   // {
//   //   id: 4,
//   //   DishName: 'Borek',
//   //   DishType: 'Turkish',
//   //   DishPrice: 16,
//   //   DishDescription: 'Borek is a turkish dish',
//   // },
//   // {
//   //   id: 5,
//   //   DishName: 'Menemen',
//   //   DishType: 'Turkish',
//   //   DishPrice: 20,
//   //   DishDescription: 'Menemen is a turkish dish',
//   // },
//   // {
//   //   id: 6,
//   //   DishName: 'Pizza',
//   //   DishType: 'Italian',
//   //   DishPrice: 150,
//   //   DishDescription: 'Pizza is an Italian dish',
//   // },
//   // {
//   //   id: 7,
//   //   DishName: 'Pasta',
//   //   DishType: 'Italian',
//   //   DishPrice: 44,
//   //   DishDescription: 'Pasta is an Italian dish',
//   // },
//   // {
//   //   id: 8,
//   //   DishName: 'Spaghetti',
//   //   DishType: 'Italian',
//   //   DishPrice: 36,
//   //   DishDescription: 'Spaghetti is an Italian dish',
//   // },
//   // {
//   //   id: 9,
//   //   DishName: 'Lasagna',
//   //   DishType: 'Italian',
//   //   DishPrice: 65,
//   //   DishDescription: 'Lasagna is an Italian dish',
//   // },
// ];
const columnsData = [
  // { field: 'id', headerName: 'id', width: 100 },
  // {
  //   field: 'DishName',
  //   headerName: 'DishName',
  //   width: 150,
  //   editable: true,
  // },
  // { field: 'DishType', headerName: 'DishType', width: 150 },
  // { field: 'DishPrice', headerName: 'DishPrice', width: 150 },
  // {
  //   field: 'DishDescription',
  //   headerName: 'DishDescription',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 250,
  // },
  { field: "description", headerName: "DishName", width: 250 },
  { field: "thumbnail", headerName: "thumbnail", width: 250 },
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
    field: "Add MenuItems",
    width: 150,
    renderCell: (cellValues) => {
      console.log(cellValues.id);
      return (
        <>
          <Link href={`../MenuItems/${cellValues.id}`}>
            <IconButton variant="contained" color="primary">
              <MenuBookIcon />
            </IconButton>
          </Link>
        </>
      );
    },
  },
];
const dataObj = {
  title: "Menu Group",
  link: "../Menu/addMenu",
};
const Menu = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { fetchData } = useSelector((state) => state.menuReducer);
  console.log(fetchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenu(id));
  }, []);
  return (
    <Layout>
      <DataTable
        props={fetchData ? fetchData : []}
        columnsData={columnsData}
        dataObj={dataObj}
      />
    </Layout>
  );
};

export default Menu;
