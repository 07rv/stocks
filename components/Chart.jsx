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

const Chart = () => {
  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Nov",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [1, 2, 3, 4, 5, 6, 7, 9, 13, 45],
            borderColor: "black",
            backgroundColor: "black",
          },
        ],
      }}
    />
  );
};

export default Chart;
