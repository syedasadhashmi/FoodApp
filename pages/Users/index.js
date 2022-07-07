// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   Container,
// } from '@mui/material';
// import { maxHeight } from '@mui/system';

// import React from 'react';
// const obj = [
//   {
//     id: 1,
//     first_name: 'Jamie',
//     last_name: 'Roome',
//     email: 'jroome0@behance.net',
//     gender: 'Female',
//     ip_address: '168.62.129.61',
//   },
//   {
//     id: 2,
//     first_name: 'Tailor',
//     last_name: 'Dalgarnowch',
//     email: 'tdalgarnowch1@cam.ac.uk',
//     gender: 'Male',
//     ip_address: '97.113.185.85',
//   },
//   {
//     id: 3,
//     first_name: 'Ikey',
//     last_name: 'Esselen',
//     email: 'iesselen2@diigo.com',
//     gender: 'Male',
//     ip_address: '221.181.70.144',
//   },
//   {
//     id: 4,
//     first_name: 'Bee',
//     last_name: 'Sumnall',
//     email: 'bsumnall3@amazonaws.com',
//     gender: 'Agender',
//     ip_address: '48.10.115.213',
//   },
//   {
//     id: 5,
//     first_name: 'Thane',
//     last_name: 'Thackray',
//     email: 'tthackray4@time.com',
//     gender: 'Male',
//     ip_address: '143.180.15.26',
//   },
//   {
//     id: 6,
//     first_name: 'Philbert',
//     last_name: 'Keune',
//     email: 'pkeune5@digg.com',
//     gender: 'Male',
//     ip_address: '92.49.251.243',
//   },
//   {
//     id: 7,
//     first_name: 'Chris',
//     last_name: 'Whatford',
//     email: 'cwhatford6@twitter.com',
//     gender: 'Male',
//     ip_address: '140.140.48.131',
//   },
//   {
//     id: 8,
//     first_name: 'Cord',
//     last_name: 'Rayhill',
//     email: 'crayhill7@ucsd.edu',
//     gender: 'Male',
//     ip_address: '20.2.182.211',
//   },
//   {
//     id: 9,
//     first_name: 'Greta',
//     last_name: 'Yate',
//     email: 'gyate8@php.net',
//     gender: 'Female',
//     ip_address: '239.137.141.133',
//   },
//   {
//     id: 10,
//     first_name: 'Pru',
//     last_name: 'Du Plantier',
//     email: 'pduplantier9@nih.gov',
//     gender: 'Female',
//     ip_address: '137.171.190.16',
//   },
// ];
// const Users = () => {
//   return (
//     <Container sx={{ paddingTop: '24px', paddingBottom: '24px' }}>
//       <TableContainer component={Paper}>
//         <Table aria-label="users table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Id</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Gender</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {obj.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.first_name}</TableCell>
//                 <TableCell>{row.last_name}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.gender}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default Users;
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

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 150,
  },
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
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "mayan", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <Container>
      <Card>
        <CardHeader
          title="Users"
          action={
            <IconButton>
              <Link href="../../components/UI/AddUserModal">
                <PersonAddAltIcon sx={{ fontSize: "35px" }} />
              </Link>
            </IconButton>
          }
        />
        <CardContent>
          <DataGrid
            sx={{ height: "78vh" }}
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
}
