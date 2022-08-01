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
import axios from "axios";
const DataTable = ({ props, columnsData, dataObj }) => {
  const handleSubmit = (GridCellEditCommitParams) => {
    console.log(GridCellEditCommitParams);
    axios
      .put(
        `http://10.4.41.164:8080/vendor-service/vendor/?vendorId=${GridCellEditCommitParams.id}`,
        {
          restaurantTitle: GridCellEditCommitParams.value,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

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
            onCellEditCommit={handleSubmit}
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
