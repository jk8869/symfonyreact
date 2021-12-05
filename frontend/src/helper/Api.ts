import { throws } from 'assert';
import axios from 'axios';

export class Api {
    apiUrl = 'http://localhost:8000';

    getTotalCustomers = async () => {
      const totalCustomers = await axios.get(`${this.apiUrl}/customers`)
        .then((response: any) => response.data)
        .then((data : any) => data.total)
        .catch((e: any) => throws(e));
      return totalCustomers;
    };

    getTotalOrders = async () => {
      const totalOrders = await axios.get(`${this.apiUrl}/orders`)
        .then((response: any) => response.data)
        .then((data : any) => data.total)
        .catch((e: any) => throws(e));
      return totalOrders;
    };

    getTotalRevenue = async () => {
      const totalRevenue = await axios.get(`${this.apiUrl}/revenue`)
        .then((response: any) => response.data)
        .then((data : any) => data.revenue)
        .catch((e: any) => throws(e));
      return totalRevenue;
    };
}
