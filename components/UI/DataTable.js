import {
  Container,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import axios from 'axios';
import { apiUrl } from '../../utils/constant';
const DataTable = ({ props, columnsData, dataObj }) => {
  const handleSubmit = (GridCellEditCommitParams) => {
    const token = localStorage.getItem('tokenDetails');
    let data = { restaurantTitle: GridCellEditCommitParams.value };
    let head = { headers: { Authorization: `Bearer ${token}` } };
    console.log(GridCellEditCommitParams);
    axios
      .put(
        `${apiUrl}/vendor-service/vendor/?vendorId=${GridCellEditCommitParams.id}`,
        data,
        head
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container sx={{ height: '85vh', marginTop: '20px', marginBottom: '20px' }}>
      <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
        <CardHeader
          title={dataObj.title}
          action={
            <IconButton>
              <Link href={dataObj.link}>
                <PersonAddAltIcon sx={{ fontSize: '35px' }} />
              </Link>
            </IconButton>
          }
        />
        <CardContent>
          <DataGrid
            onCellEditCommit={handleSubmit}
            sx={{ height: '65vh' }}
            rows={props}
            columns={columnsData}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </CardContent>
      </Card>
    </Container>
  );
};
export default DataTable;
