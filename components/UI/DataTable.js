import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", width: 150 },
  {
    field: "fullName",
    headerName: "Full name",
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

const rows = [
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
const DataTable = () => {
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <CardHeader
          title="Users"
          action={
            <IconButton>
              <Link href="../Users/addUser">
                <PersonAddAltIcon sx={{ fontSize: "35px" }} />
              </Link>
            </IconButton>
          }
        />
        <CardContent>
          <DataGrid
            sx={{ height: "65vh" }}
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default DataTable;
