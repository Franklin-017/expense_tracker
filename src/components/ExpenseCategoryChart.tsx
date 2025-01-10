import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const getRandomData = () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000));

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Food",
            data: getRandomData(),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
        },
        {
            label: "Shopping",
            data: getRandomData(),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
        },
        {
            label: "Transport",
            data: getRandomData(),
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
        },
        {
            label: "Rent",
            data: getRandomData(),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom" as const,
            labels: {
                boxWidth: 10,
                boxHeight: 10,
            },
        },
        title: {
            display: true,
            text: "Expense Category",
            font: {
                size: 14,
            },
            position: "top" as const,
            align: "start" as const,
            padding: {
                bottom: 30, 
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
            ticks: {
                stepSize: 200,
            },
        },
    },
};

export default function ExpenseCategoryChart() {
    return (
        <div className="col-span-3 border border-gray-200 p-6 rounded-lg">
            <Bar data={data} options={options} />
        </div>
    );
}
