import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import CardItem from '../component/CardItem';
import { requestTimeFrame, requestTotalCustomers, requestTotalOrders, requestTotalRevenue } from '../redux/actions';
import Chart from '../component/Chart';

const Dashboard = (props : any) => {
  const dispatch = useDispatch();
  const { totalCustomers, totalOrders, totalRevenue, timeframe } = props;

  useEffect(() => {
    dispatch(requestTotalCustomers());
    dispatch(requestTotalOrders());
    dispatch(requestTotalRevenue());
    dispatch(requestTimeFrame());
  }, []);

  return (
    <div>
      <div className="row">
        <CardItem title="Total Customer" value={totalCustomers} />
        <CardItem title="Total Orders" value={totalOrders} />
        <CardItem title="Total Revenue" value={totalRevenue} />
      </div>
      <div className="row">
        <Chart timeframe={timeframe} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  totalCustomers: state.totalCustomers,
  totalOrders: state.totalOrders,
  totalRevenue: state.totalRevenue,
  customerLoading: state.customerLoading,
  totalCustomerFailed: state.totalCustomerFailed,
  timeframe: state.timeframe,
});

export default connect(mapStateToProps)(Dashboard);
