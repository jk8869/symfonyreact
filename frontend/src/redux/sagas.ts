import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from '../helper/Api';
import { TOTAL_CUSTOMER_FAILED, TOTAL_CUSTOMER_REQUESTED, TOTAL_CUSTOMER_SUCCEEDED, TOTAL_ORDER_FAILED, TOTAL_ORDER_REQUESTED, TOTAL_ORDER_SUCCEEDED, TOTAL_REVENUE_FAILED, TOTAL_REVENUE_REQUESTED, TOTAL_REVENUE_SUCCEEDED } from './constants';

export function* getTotalCustomers(): any {
  try {
    const api = new Api();
    const totalCustomers = yield call(api.getTotalCustomers);
    yield put({ type: TOTAL_CUSTOMER_SUCCEEDED, payload: totalCustomers });
  } catch (e) {
    yield put({ type: TOTAL_CUSTOMER_FAILED, payload: true });
  }
}

export function* getTotalOrders(): any {
  try {
    const api = new Api();
    const totalOrders = yield call(api.getTotalOrders);
    yield put({ type: TOTAL_ORDER_SUCCEEDED, payload: totalOrders });
  } catch (e) {
    yield put({ type: TOTAL_ORDER_FAILED, payload: true });
  }
}

export function* getTotalRevenue(): any {
  try {
    const api = new Api();
    const totalRevenue = yield call(api.getTotalRevenue);
    yield put({ type: TOTAL_REVENUE_SUCCEEDED, payload: totalRevenue });
  } catch (e) {
    yield put({ type: TOTAL_REVENUE_FAILED, payload: true });
  }
}

export function* appSaga() {
  yield takeEvery(TOTAL_CUSTOMER_REQUESTED, getTotalCustomers);
  yield takeEvery(TOTAL_ORDER_REQUESTED, getTotalOrders);
  yield takeEvery(TOTAL_REVENUE_REQUESTED, getTotalRevenue);
}
