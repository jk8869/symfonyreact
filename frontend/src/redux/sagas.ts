import { call, put, takeEvery, select } from 'redux-saga/effects';
import { Api } from '../helper/Api';
import { TIME_FRAME_FAILED, TIME_FRAME_REQUESTED, TIME_FRAME_SUCCEEDED, TOTAL_CUSTOMER_FAILED, TOTAL_CUSTOMER_REQUESTED, TOTAL_CUSTOMER_SUCCEEDED, TOTAL_ORDER_FAILED, TOTAL_ORDER_REQUESTED, TOTAL_ORDER_SUCCEEDED, TOTAL_REVENUE_FAILED, TOTAL_REVENUE_REQUESTED, TOTAL_REVENUE_SUCCEEDED } from './constants';

const getStartDate = (state: any) => state.startDate;
const getEndDate = (state: any) => state.endDate;

export function* getTotalCustomers(): any {
  try {
    const startDate = yield select(getStartDate);
    const endDate = yield select(getEndDate);
    const api = new Api();
    const totalCustomers = yield call(api.getTotalCustomers, startDate, endDate);
    yield put({ type: TOTAL_CUSTOMER_SUCCEEDED, payload: totalCustomers });
  } catch (e) {
    yield put({ type: TOTAL_CUSTOMER_FAILED, payload: true });
  }
}

export function* getTotalOrders(): any {
  try {
    const startDate = yield select(getStartDate);
    const endDate = yield select(getEndDate);
    const api = new Api();
    const totalOrders = yield call(api.getTotalOrders, startDate, endDate);
    yield put({ type: TOTAL_ORDER_SUCCEEDED, payload: totalOrders });
  } catch (e) {
    yield put({ type: TOTAL_ORDER_FAILED, payload: true });
  }
}

export function* getTotalRevenue(): any {
  try {
    const startDate = yield select(getStartDate);
    const endDate = yield select(getEndDate);
    const api = new Api();
    const totalRevenue = yield call(api.getTotalRevenue, startDate, endDate);
    yield put({ type: TOTAL_REVENUE_SUCCEEDED, payload: totalRevenue });
  } catch (e) {
    yield put({ type: TOTAL_REVENUE_FAILED, payload: true });
  }
}

export function* getTimeFrame(): any {
  try {
    const api = new Api();
    const timeframe = yield call(api.getTimeFrame);
    yield put({ type: TIME_FRAME_SUCCEEDED, payload: timeframe });
  } catch (e) {
    yield put({ type: TIME_FRAME_FAILED, payload: true });
  }
}

export function* appSaga() {
  yield takeEvery(TOTAL_CUSTOMER_REQUESTED, getTotalCustomers);
  yield takeEvery(TOTAL_ORDER_REQUESTED, getTotalOrders);
  yield takeEvery(TOTAL_REVENUE_REQUESTED, getTotalRevenue);
  yield takeEvery(TIME_FRAME_REQUESTED, getTimeFrame);
}
