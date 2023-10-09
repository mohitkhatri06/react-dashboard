import React from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   scales: {
      xAxes: [
         {
            gridLines: {
               display: false,
            },
         },
      ],
      yAxes: [
         {
            gridLines: {
               display: false,
            },
         },
      ],
      x: {
         grid: {
            display: false,
         },
      },
      y: {
         ticks: {
            stepSize: 50,
         },
      },
   },
   responsive: true,
   borderRadius: 6,
   2: 0,
   3: 0,
   7: 9,

   plugins: {
      legend: {
         display: false,
      },
      title: {
         display: true,
         text: 'Chart.js Bar Chart',
      },
   },
};

//const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const labels = ['January', 'February', 'March'];
export const data = {
   labels,
   datasets: [
      {
         // label: 'Dataset 1',
         data: labels.map(
            () => Math.random({ min: 0, max: 100 }).toFixed(2) * 100
         ),
         backgroundColor: '#d3cffc',
      },
      {
         //  label: 'Dataset 2',
         data: labels.map(
            () => Math.random({ min: 0, max: 100 }).toFixed(2) * 100
         ),
         backgroundColor: '#6e62e5',
      },
   ],
};

export function BarChart() {
   return (
      <div style={{ height: '160px' }}>
         <Bar options={options} data={data} />
      </div>
   );
}
