/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaUser, FaCartPlus, FaMoneyBill } from 'react-icons/fa';
import CardItem from '../component/CardItem';
import { requestTimeFrame, requestTotalCustomers, requestTotalOrders, requestTotalRevenue } from '../redux/actions';
import Chart from '../component/Chart';
import DateRangePicker from '../component/DateRangePicker';

const UserIcon = () => <i className="fa fa-user"><FaUser /></i>;
const CartIcon = () => <i className="fa fa-cart-plus"><FaCartPlus /></i>;
const MoneyIcon = () => <i className="fa fa-money-bill"><FaMoneyBill /></i>;

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
        <DateRangePicker />
        <CardItem title="Total Customer" value={totalCustomers} icon={<UserIcon />} />
        <CardItem title="Total Orders" value={totalOrders} icon={<CartIcon />} />
        <CardItem title="Total Revenue" value={totalRevenue} icon={<MoneyIcon />} />
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
