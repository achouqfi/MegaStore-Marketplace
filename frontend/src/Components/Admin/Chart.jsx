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


function Chart() {

  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Commandes',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [33, 52, 20, 40, 10, 70, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [23, 12, 40, 20, 80, 30, 70],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  };

  return (
    <div className='p-5'>

      <div className='p-5 bg-gray-50 rounded-md shadow-md	'>

        <Bar options={options} data={data} />

      </div>

    </div>
  )
}

export default Chart