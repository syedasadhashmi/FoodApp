import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from '../../components/Layout/Layout';
import DataTable from '../../components/UI/DataTable';
import { fetchMenuDishes } from '../../Redux/MenuDishes/menuDishesActions';
import Login from '../Login';
import axios from 'axios';
import { apiUrl } from '../../utils/constant';
import { deleteMenuItems } from '../../Redux/MenuDishes/menuDishesActions';
const dataObj = {
  title: 'Menu Items',
  link: '../MenuItems/addMenuItems',
};

const menuItems = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginReducer);
  const { fetchDishes } = useSelector((state) => state.menuDishesReducer);
  const columnsData = [
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    { field: 'description', headerName: 'Item Name', width: 250 },
    { field: 'price', headerName: 'Price', width: 250 },

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
              onClick={() => deleteHandler(cellValues.id)}
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
  const deleteHandler = (rowId) => {
    axios
      .delete(
        `${apiUrl}/vendor-service/catalogItem/?menuGroupId=${id}&catalogItemId=${rowId}`
      )
      .then(function (response) {
        console.log(response);
        dispatch(deleteMenuItems(rowId));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  useEffect(() => {
    dispatch(fetchMenuDishes(id));
  }, []);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <DataTable
        props={fetchDishes ? fetchDishes : []}
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

export default menuItems;
