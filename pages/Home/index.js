import { Container, Typography } from "@mui/material";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h3">Home</Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
