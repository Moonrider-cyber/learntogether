import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
  );

export const LineChart = () => {
  
    const lables =["jan","feb","mar","apr","may","jun"];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'buttom',
            },
            title: {
                display: true,
                text: 'Yearly view',
            },
        },
    };
    const data = {
        labels : lables,
        datasets: [
        {   
            lable: 'views',
            data: [12, 19, 3, 5, 2, 3],   
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'blueviolet',
        },
        ],
    };
  return <Line options={options} data={data} />
};

export const DoughutChart = () => {
  
    const data = {
        labels : [ "Vistor","User"],
        datasets: [
        {   
            lable: 'views',
            data: [4, 6],   
            backgroundColor: ['rgb(62,12,171,0.3)',"rgb(214, 43, 129)"],
            borderColor: ['rgb(62,12,171)',"rgb(214, 43, 129,0.3)"],
            borrderWidth: 1,
        },
        ],
    };
  return <Doughnut data={data} />
};
