import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { putStartDate, putEndDate, requestTotalCustomers, requestTotalOrders, requestTotalRevenue } from '../redux/actions';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date('2021/02/08'));
  const [endDate, setEndDate] = useState(new Date('2021/02/10'));
  const dispatch = useDispatch();
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => {
          setStartDate(date);
          const formattedDate = (moment(date)).format('YYYY-MM-DD');
          dispatch(putStartDate(formattedDate));
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: any) => {
          setEndDate(date);
          const formattedDate = (moment(date)).format('YYYY-MM-DD');
          dispatch(putEndDate(formattedDate));
          dispatch(requestTotalCustomers());
          dispatch(requestTotalOrders());
          dispatch(requestTotalRevenue());
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRangePicker;
