import React, { useState } from "react";
import DataTable from "../../components/UI/DataTable";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";

const rowData = [
  { id: 1, lastName: "Dasa", firstName: "Dia", age: 35 },
  { id: 2, lastName: "Brian", firstName: "Lara", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
  { id: 6, lastName: "Melisandre", firstName: "mayan", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const Restaurants = () => {
  return (
    <>
      <Header />
      <DataTable props={rowData} />
      <Footer />
    </>
  );
};

export default Restaurants;
