import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';
const PieChart = () => {
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
        label: 'Orders In Month',
        data: [33, 73, 85, 41, 44, 65, 44, 66, 77, 88, 22, 44],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Paper
      sx={{ height: '100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
    >
      <Bar data={data} height={400} />
    </Paper>
  );
};

export default PieChart;
