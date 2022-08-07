import Accordian from '../../components/UI/Accordian';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import { useEffect } from 'react';
import { fetchPendingOrders } from '../../Redux/Orders/ordersActions';
const inPendingObj = [
  {
    id: 1,
    title: 'Manchorian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 2,
    title: 'Manchao Soup',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 3,
    title: 'Borek',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
];
const inProgressObj = [
  {
    id: 1,
    title: 'Menemen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 2,
    title: 'Pizza',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 3,
    title: 'Chinese Rice',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
];
const deliveredObj = [
  {
    id: 1,
    title: 'Spaghetti',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 2,
    title: 'Pasta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
  {
    id: 3,
    title: 'Lasagna',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.',
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  const { pendingOrders } = useSelector((state) => state.ordersReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(fetchPendingOrders());
  }, []);
  console.log(pendingOrders);
  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <Accordian
        pendingOrders={pendingOrders ? pendingOrders : []}
        inProgressObj={inProgressObj}
        deliveredObj={deliveredObj}
      />
    </Layout>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};

export default Orders;
