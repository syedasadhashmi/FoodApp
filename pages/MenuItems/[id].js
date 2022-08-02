import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import DataTable from "../../components/UI/DataTable";
import { fetchMenuDishes } from "../../Redux/MenuDishes/menuDishesActions";

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
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => <Avatar src={params.value} />,
  },
  { field: "description", headerName: "Item Name", width: 250 },
  { field: "price", headerName: "Price", width: 250 },

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
  title: "Menu Items",
  link: "../MenuItems/addMenuItems",
};

const menuItems = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const dispatch = useDispatch();
  const { fetchDishes } = useSelector((state) => state.menuDishesReducer);
  useEffect(() => {
    dispatch(fetchMenuDishes(id));
  }, []);
  return (
    <Layout>
      <DataTable
        props={fetchDishes ? fetchDishes : []}
        columnsData={columnsData}
        dataObj={dataObj}
      />
    </Layout>
  );
};

export default menuItems;
