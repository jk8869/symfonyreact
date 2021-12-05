import { TOTAL_CUSTOMER_REQUESTED, TOTAL_CUSTOMER_SUCCEEDED, TOTAL_CUSTOMER_FAILED, TOTAL_ORDER_REQUESTED, TOTAL_ORDER_SUCCEEDED, TOTAL_ORDER_FAILED, TOTAL_REVENUE_REQUESTED, TOTAL_REVENUE_SUCCEEDED, TOTAL_REVENUE_FAILED, TIME_FRAME_REQUESTED, TIME_FRAME_SUCCEEDED, TIME_FRAME_FAILED } from './constants';

const initialState = {
  totalCustomers: 0,
  totalOrders: 0,
  totalRevenue: 0,
  timeframe: [],

  totalCustomersLoading: false,
  totalOrdersLoading: false,
  totalRevenueLoading: false,
  timeframeLoading: false,

  totalCustomersFailed: false,
  totalOrdersFailed: false,
  totalRevenueFailed: false,
  timeFrameFailed: false,
};

export type Action = {type: String, payload: any};

export const appReducer = (
  state = initialState,
  action : Action,
) => {
  switch (action.type) {
    case TOTAL_CUSTOMER_REQUESTED:
      return { ...state, totalCustomersLoading: action.payload };

    case TOTAL_CUSTOMER_SUCCEEDED:
      return { ...state, totalCustomers: action.payload, totalCustomersLoading: false };

    case TOTAL_CUSTOMER_FAILED:
      return { ...state, totalCustomersFailed: true };

    case TOTAL_ORDER_REQUESTED:
      return { ...state, totalOrdersLoading: action.payload };

    case TOTAL_ORDER_SUCCEEDED:
      return { ...state, totalOrders: action.payload, totalOrdersLoading: false };

    case TOTAL_ORDER_FAILED:
      return { ...state, totalOrdersFailed: true };

    case TOTAL_REVENUE_REQUESTED:
      return { ...state, totalRevenueLoading: action.payload };

    case TOTAL_REVENUE_SUCCEEDED:
      return { ...state, totalRevenue: action.payload, totalRevenueLoading: false };

    case TOTAL_REVENUE_FAILED:
      return { ...state, totalRevenueFailed: true };

    case TIME_FRAME_REQUESTED:
      return { ...state, timeframeLoading: action.payload };

    case TIME_FRAME_SUCCEEDED:
      return { ...state, timeframe: action.payload, timeframeLoading: false };

    case TIME_FRAME_FAILED:
      return { ...state, timeframeFailed: true };

    default:
      return state;
  }
};
