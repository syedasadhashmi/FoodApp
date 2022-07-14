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
            rows={props}
            columns={columnsData}
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
