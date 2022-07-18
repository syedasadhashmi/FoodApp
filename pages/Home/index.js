import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";

const Home = () => {
  return (
    <Layout>
      <Container
        sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h3">Home</Typography>
      </Container>
    </Layout>
  );
};

export default Home;
