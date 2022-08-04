import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
// import Login from "../Login";
// import BarChart from "../../components/Charts/barChart";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

const Home = () => {
  const { isLogin } = useSelector((state) => state.loginReducer);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <Container
        sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}
      >
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item md={6} sm={12}>
            {/* <PieChart /> */}
          </Grid>
          <Grid item md={6} sm={12}>
            {/* <PieChart /> */}
          </Grid>
          <Grid item md={8} sm={12}>
            <BarChart />
          </Grid>
          <Grid item md={4} sm={12}>
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
