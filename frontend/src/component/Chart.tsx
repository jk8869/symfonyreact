import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'One month timeframe',
    },
  },
};

const Chart = (props: any) => {
  const { timeframe } = props;
  const labels : any = [];
  if (timeframe.length === 0) return (<div>loading...</div>);
  timeframe.orders.map((item: any) => labels.push(item.date));
  timeframe.customers.map((item: any) => labels.push(item.date));

  const data = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: labels.map((date: String) => {
          const item = timeframe.orders.find((element: any) => element.date === date);
          return item ? item.orders : 0;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Customers',
        data: labels.map((date: String) => {
          const item = timeframe.customers.find((element: any) => element.date === date);
          return item ? item.customers : 0;
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
