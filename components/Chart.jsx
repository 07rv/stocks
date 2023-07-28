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

import { Box } from "@mui/material";

const Chart = ({ Title, labels, data }) => {
  return (
    <Box
      sx={{
        height: "80%",
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Line
        options={{
          responsive: true,
          scales: {
            y: {
              ticks: { color: "black", beginAtZero: true },
            },
            x: {
              ticks: { color: "black", beginAtZero: true },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "black",
                font: {
                  size: 20,
                },
              },
            },
          },
        }}
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
    </Box>
  );
};

export default Chart;
