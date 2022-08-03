import UserForm from "../../components/UI/UserForm";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import Login from "../Login";
const addUser = () => {
  const { isLogin } = useSelector((state) => state.loginReducer);
  return (
    <>
      {isLogin ? (
        <Layout>
          <UserForm />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default addUser;
