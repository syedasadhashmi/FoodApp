import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Login from "../Login";

const Home = () => {
  const { isLogin } = useSelector((state) => state.loginReducer);
  return (
    <>
      {isLogin ? (
        <Layout>
          <Container
            sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}
          >
            <Typography variant="h3">Home</Typography>
          </Container>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
