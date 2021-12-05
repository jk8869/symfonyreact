import { TOTAL_CUSTOMER_REQUESTED, TOTAL_CUSTOMER_SUCCEEDED, TOTAL_CUSTOMER_FAILED,
  TOTAL_ORDER_REQUESTED, TOTAL_ORDER_SUCCEEDED, TOTAL_ORDER_FAILED, TOTAL_REVENUE_REQUESTED,
  TOTAL_REVENUE_SUCCEEDED, TOTAL_REVENUE_FAILED, TIME_FRAME_REQUESTED, TIME_FRAME_SUCCEEDED, TIME_FRAME_FAILED } from './constants';
import { Action } from './reducers';

export const requestTotalCustomers = () : Action => ({
  type: TOTAL_CUSTOMER_REQUESTED,
  payload: true
});

export const recivedTotalCustomers = (totalCustomers: Number) : Action => ({
  type: TOTAL_CUSTOMER_SUCCEEDED,
  payload: totalCustomers
});

export const totalCustomersFailed = () : Action => ({
  type: TOTAL_CUSTOMER_FAILED,
  payload: true
});

export const requestTotalOrders = () : Action => ({
  type: TOTAL_ORDER_REQUESTED,
  payload: true
});

export const recivedTotalOrders = (totalOrders: Number) : Action => ({
  type: TOTAL_ORDER_SUCCEEDED,
  payload: totalOrders
});

export const totalOrdersFailed = () : Action => ({
  type: TOTAL_ORDER_FAILED,
  payload: true
});

export const requestTotalRevenue = () : Action => ({
  type: TOTAL_REVENUE_REQUESTED,
  payload: true
});

export const recivedTotalRevenue = (totalRevenue: Number) : Action => ({
  type: TOTAL_REVENUE_SUCCEEDED,
  payload: totalRevenue
});

export const totalRevenueFailed = () : Action => ({
  type: TOTAL_REVENUE_FAILED,
  payload: true
});

export const requestTimeFrame = () : Action => ({
  type: TIME_FRAME_REQUESTED,
  payload: true
});

export const recivedTimeFrame = (timeframe: any) : Action => ({
  type: TIME_FRAME_SUCCEEDED,
  payload: timeframe
});

export const timeFrameFailed = () : Action => ({
  type: TIME_FRAME_FAILED,
  payload: true
});
