import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ users, patients, doctors }) => {
  const data = {
    labels: ['Users', 'Patients', 'Doctors'],
    datasets: [
      {
        label: 'Population',
        data: [users, patients, doctors],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
