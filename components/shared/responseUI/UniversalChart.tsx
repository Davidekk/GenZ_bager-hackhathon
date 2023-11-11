import { useTheme } from "@/context/ThemeProvider";
import { Chart } from "react-google-charts";
import React from "react";

interface Summary {
  [key: string]: number;
}

const countValues = (data: any, dataKey: any) => {
  const summary: Summary = {};
  data.forEach((item: any) => {
    const value = item[dataKey];
    if (!summary[value]) {
      summary[value] = 0;
    }
    summary[value]++;
  });
  return summary;
};

const UniversalChart = ({ data, dataKey, chartType }: any) => {
  const { mode } = useTheme();

  const summary: { [key: string]: number } = {};
  const summaryPie = countValues(data, dataKey);

  data.forEach((item: any) => {
    const value = item[dataKey];
    summary[value] = (summary[value] || 0) + 1;
  });

  let chartData: any;

  if (chartType === "PieChart") {
    chartData = [
      ["", ""],
      ...Object.entries(summaryPie).map(([value, count]) => [value, count]),
    ];
  } else if (chartType !== "LineChart") {
    chartData = [
      ["", ...Object.keys(summary)],
      ["", ...Object.values(summary)],
    ];
  } else {
    chartData = [
      ["", ""],
      ...Object.entries(summary).map(([value, count]) => [value, count]),
    ];
  }

  const legendTextColor = mode === "dark" ? "white" : "black";
  const chartOptions = {
    backgroundColor: "transparent",
    width: 600,
    height: 400,
    legend: {
      textStyle: {
        color: legendTextColor,
      },
    },
    animation: {
      duration: 1000,
      easing: "linear",
    },
  };

  return (
    <div>
      <Chart chartType={chartType} data={chartData} options={chartOptions} />
    </div>
  );
};

export default UniversalChart;
