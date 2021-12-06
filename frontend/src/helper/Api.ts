import { throws } from 'assert';
import axios from 'axios';

export class Api {
    apiUrl = 'http://localhost:8000';

    getTotalCustomers = async (startDate: any, endDate: any) => {
      const totalCustomers = await axios.get(`${this.apiUrl}/customers?startDate=${startDate}&endDate=${endDate}`)
        .then((response: any) => response.data)
        .then((data : any) => data.total)
        .catch((e: any) => throws(e));
      return totalCustomers;
    };

    getTotalOrders = async (startDate: any, endDate: any) => {
      const totalOrders = await axios.get(`${this.apiUrl}/orders?startDate=${startDate}&endDate=${endDate}`)
        .then((response: any) => response.data)
        .then((data : any) => data.total)
        .catch((e: any) => throws(e));
      return totalOrders;
    };

    getTotalRevenue = async (startDate: any, endDate: any) => {
      const totalRevenue = await axios.get(`${this.apiUrl}/revenue?startDate=${startDate}&endDate=${endDate}`)
        .then((response: any) => response.data)
        .then((data : any) => data.revenue)
        .catch((e: any) => throws(e));
      return totalRevenue;
    };

    getTimeFrame = async () => {
      const timeframe = await axios.get(`${this.apiUrl}/timeframe`)
        .then((response: any) => response.data)
        .then((data : any) => data)
        .catch((e: any) => throws(e));
      return timeframe;
    };
}
