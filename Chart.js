import { Chart, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

const data = {
    // your data here
};

const options = {
    // your options here
};

function MyChart() {
    return <Bar data={data} options={options} />;
}

export default MyChart;
