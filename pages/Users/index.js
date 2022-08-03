import { IconButton } from "@mui/material";
import DataTable from "../../components/UI/DataTable";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import Login from "../Login";
export default function Users() {
  const rowData = [
    {
      id: 1,
      FirstName: "Snow",
      LastName: "Jon",
      Age: 35,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 2,
      FirstName: "Lannister",
      LastName: "Cersei",
      Age: 42,
      Gender: "Female",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 3,
      FirstName: "Lannister",
      LastName: "Jaime",
      Age: 45,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 4,
      FirstName: "Stark",
      LastName: "Arya",
      Age: 16,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 5,
      FirstName: "Targaryen",
      LastName: "Daenerys",
      Age: 20,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 6,
      FirstName: "Melisandre",
      LastName: "mayan",
      Age: 150,
      Gender: "Female",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 7,
      FirstName: "Clifford",
      LastName: "Ferrara",
      Age: 44,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 8,
      FirstName: "Frances",
      LastName: "Rossini",
      Age: 36,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
    {
      id: 9,
      FirstName: "Roxie",
      LastName: "Harvey",
      Age: 65,
      Gender: "Male",
      Position: "Lead",
      Address: "king Selveston",
    },
  ];
  const columnsData = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "FirstName",
      headerName: "FirstName",
      width: 150,
      editable: true,
    },
    { field: "LastName", headerName: "LastName", width: 150 },
    { field: "Age", headerName: "Age", width: 150 },
    {
      field: "fullName",
      headerName: "fullName",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.FirstName || ""} ${params.row.LastName || ""}`,
    },
    { field: "Gender", headerName: "Gender", width: 150 },
    { field: "Position", headerName: "Position", width: 150 },
    { field: "Address", headerName: "Address", width: 150 },
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
              onClick={deleteHandler}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const dataObj = {
    title: "Users",
    link: "../Users/addUser",
  };
  const deleteHandler = (event) => {
    console.log(event.target);
  };
  const { isLogin } = useSelector((state) => state.loginReducer);
  return (
    <>
      {isLogin ? (
        <Layout>
          <DataTable
            props={rowData}
            columnsData={columnsData}
            dataObj={dataObj}
          />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
