import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Paper } from '@mui/material';
const BarChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'March',
      'Apr',
      'May',
      'June',
      'july',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Vendors In Month',
        data: [33, 73, 85, 41, 44, 65, 44, 66, 77, 88, 22, 44],
        fill: true,
        tension: 0.5,
        backgroundColor: ['rgba(242, 76, 76, 0.1)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
      {
        label: 'Orders In Month',
        data: [22, 33, 44, 55, 11, 15, 28, 50, 30, 40, 10, 20],
        fill: true,
        tension: 0.5,
        backgroundColor: ['rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Paper sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
      <Line data={data} height={400} width={600} />
    </Paper>
  );
};

export default BarChart;
