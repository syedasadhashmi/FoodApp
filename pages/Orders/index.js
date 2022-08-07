import Accordian from '../../components/UI/Accordian';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import { useEffect } from 'react';
import {
  fetchPendingOrders,
  fetchAcceptedOrders,
  fetchCancelledOrders,
  fetchPreparedOrders,
  fetchCompletedOrders,
} from '../../Redux/Orders/ordersActions';
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
  const {
    pendingOrders,
    acceptedOrders,
    cancelledOrders,
    preparedOrders,
    completedOrders,
  } = useSelector((state) => state.ordersReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(fetchAcceptedOrders());
    dispatch(fetchPendingOrders());
    dispatch(fetchCancelledOrders());
    dispatch(fetchPreparedOrders());
    dispatch(fetchCompletedOrders());
  }, []);
  console.log(pendingOrders);
  console.log(acceptedOrders);
  console.log(cancelledOrders);
  console.log(preparedOrders);
  console.log(completedOrders);

  return (
    // <>
    //   {isLogin ? (
    <Layout>
      <Accordian
        pendingOrders={pendingOrders ? pendingOrders : []}
        acceptedOrders={acceptedOrders ? acceptedOrders : []}
        cancelledOrders={cancelledOrders ? cancelledOrders : []}
        preparedOrders={preparedOrders ? preparedOrders : []}
        completedOrders={completedOrders ? completedOrders : []}
      />
    </Layout>
    //   ) : (
    //     <Login />
    //   )}
    // </>
  );
};

export default Orders;
