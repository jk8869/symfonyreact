import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import CardItem from '../component/CardItem';
import { requestTotalCustomers, requestTotalOrders, requestTotalRevenue } from '../redux/actions';

const Dashboard = (props : any) => {
  const dispatch = useDispatch();
  const { totalCustomers, totalOrders, totalRevenue } = props;

  useEffect(() => {
    dispatch(requestTotalCustomers());
    dispatch(requestTotalOrders());
    dispatch(requestTotalRevenue());
  }, []);

  return (
    <div>
      <div className="row">
        <CardItem title="Total Customer" value={totalCustomers} />
        <CardItem title="Total Orders" value={totalOrders} />
        <CardItem title="Total Revenue" value={totalRevenue} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  totalCustomers: state.totalCustomers,
  totalOrders: state.totalOrders,
  totalRevenue: state.totalRevenue,
  customerLoading: state.customerLoading,
  totalCustomerFailed: state.totalCustomerFailed
});

export default connect(mapStateToProps)(Dashboard);
