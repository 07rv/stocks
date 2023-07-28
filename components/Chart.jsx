import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ Title, labels, data }) => {
  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: labels,
        datasets: [
          {
            label: Title,
            data: data,
            borderColor: "black",
            backgroundColor: "black",
          },
        ],
      }}
    />
  );
};

export default Chart;
