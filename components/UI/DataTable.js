import {
  Container,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
const DataTable = ({ props, columnsData, dataObj }) => {
  const colData = columnsData.map((colItems) => {
    return {
      field: colItems.field,
      headerName: colItems.headerName,
      width: colItems.width,
      editable: colItems.editable,
      renderCell: colItems.renderCell,
      valueGetter: colItems.valueGetter,
    };
  });
  const rowsData = props.map((items) => {
    return {
      id: items.id,
      firstName: items.firstName,
      lastName: items.lastName,
      age: items.age,
    };
  });
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card>
        <CardHeader
          title={dataObj.title}
          action={
            <IconButton>
              <Link href={dataObj.link}>
                <PersonAddAltIcon sx={{ fontSize: "35px" }} />
              </Link>
            </IconButton>
          }
        />
        <CardContent>
          <DataGrid
            sx={{ height: "65vh" }}
            rows={rowsData}
            columns={colData}
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
