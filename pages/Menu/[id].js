import React, { useEffect } from 'react';
import DataTable from '../../components/UI/DataTable';
import { IconButton, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  fetchMenu,
  deleteMenuGroupRow,
} from '../../Redux/MenuGroup/menuActions';
import data2 from '../../Redux/MenuGroup/data2.json';
import axios from 'axios';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from 'next/link';
import Login from '../Login';
import { apiUrl } from '../../utils/constant';

const Menu = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { fetchData } = useSelector((state) => state.menuReducer);
  console.log(fetchData);
  const { isLogin } = useSelector((state) => state.loginReducer);
  console.log(isLogin);
  const dispatch = useDispatch();
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
      field: 'thumbnail',
      headerName: 'thumbnail',
      width: 150,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    { field: 'description', headerName: 'DishName', width: 250 },
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
    {
      field: 'Add MenuItems',
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
    title: 'Menu Group',
    link: '../Menu/addMenu',
  };
  const deleteHandler = (menuGroupId) => {
    console.log(menuGroupId);
    console.log(id);
    axios
      .delete(
        `${apiUrl}/vendor-service/menuGroup/?vendorId=${id}&menuGroupId=${menuGroupId}`
      )
      .then(function (response) {
        console.log(response);
        dispatch(deleteMenuGroupRow(menuGroupId));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  useEffect(() => {
    dispatch(fetchMenu(id));
  }, []);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <DataTable
        props={fetchData ? fetchData : []}
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

export default Menu;
