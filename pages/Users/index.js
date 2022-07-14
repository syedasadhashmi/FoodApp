import { IconButton } from "@mui/material";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import DataTable from "../../components/UI/DataTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Users() {
  const rowData = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
    { id: 6, lastName: "Melisandre", firstName: "mayan", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  const columnsData = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "firstName",
      headerName: "firstName",
      width: 150,
      editable: true,
    },
    { field: "lastName", headerName: "lastName", width: 150 },
    { field: "age", headerName: "age", width: 150 },
    {
      field: "fullName",
      headerName: "fullName",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "Action",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
            <IconButton
              variant="contained"
              color="primary"
              // onClick={(event) => {
              //   handleClick(event, cellValues);
              // }}
            >
              <EditIcon />
            </IconButton>
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
  return (
    <>
      <Header />
      <DataTable props={rowData} columnsData={columnsData} />
      <Footer />
    </>
  );
}
