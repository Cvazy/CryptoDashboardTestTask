import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useAppSelector } from "app/providers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export const GradientChart = () => {
  const activeBot = useAppSelector((state) => state.activeBot.activeIndex);
  const [botData, setBotData] = useState<{ [key: number]: number[] }>({});

  useEffect(() => {
    setBotData((prevData) => {
      if (prevData[activeBot]) {
        return prevData;
      }

      const newData = Array.from(
        { length: 8 },
        () => Math.floor(Math.random() * 20) + 30,
      );

      return { ...prevData, [activeBot]: newData };
    });
  }, [activeBot]);

  const sampleData = botData[activeBot] || [];

  const canvasData = {
    datasets: [
      {
        label: "Performance",
        pointRadius: 5,
        pointBackgroundColor: "#89c6f1",
        fill: true,
        borderColor: "#0073ce",
        lineTension: 0.4,
        data: sampleData,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { color: "#18293f" },
        ticks: { color: "#495c72", fontWeight: "600" },
        labels: ["21.04", "22.04", "23.04", "24.04", "25.04", "26.04", "27.04"],
      },
      y: {
        grid: { color: "#18293f" },
        ticks: { display: false },
        min: 0,
        max: 50,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className={"flex justify-center overflow-x-hidden w-full h-full"}>
      <div className={"flex justify-center min-w-[120vw] h-full"}>
        <Line id="GradientChart" options={options} data={canvasData} />
      </div>
    </div>
  );
};
