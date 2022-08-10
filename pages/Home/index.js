import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
// import Login from "../Login";
// import BarChart from "../../components/Charts/barChart";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import DashboardCard from "../../components/UI/DashboardCard";
const amountObj = {
  title: "Amount",
  value: "$15,000",
  icon: "PaidIcon",
};

import PaidIcon from "@mui/icons-material/Paid";
import DashboardCard2 from "../../components/UI/DashboardCard2";
import DashboardCard3 from "../../components/UI/DashboardCard3";
import DashboardCard4 from "../../components/UI/DasboardCard4";
const Home = () => {
  const { isLogin } = useSelector((state) => state.loginReducer);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <Container
        sx={{ marginTop: "10px", marginBottom: "10px", height: "90vh" }}
      >
        <Grid container spacing={4} sx={{ padding: "10px" }}>
          <Grid item md={3} sm={6} xs={12}>
            <DashboardCard />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <DashboardCard2 />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <DashboardCard3 />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <DashboardCard4 />
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <BarChart />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <PieChart />
          </Grid>
        </Grid>

        {/* <LineChart /> */}
      </Container>
    </Layout>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};

export default Home;
