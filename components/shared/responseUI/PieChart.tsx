import { useTheme } from "@/context/ThemeProvider";
import { Chart } from "react-google-charts";

const countValues = (data: any, key: any) => {
  const valueCounts: any = {};

  for (const item of data) {
    const value = item[key];
    if (value in valueCounts) {
      valueCounts[value]++;
    } else {
      valueCounts[value] = 1;
    }
  }
  return valueCounts;
};

const PieChart = ({ data, dataKey }: any) => {
  const { mode } = useTheme();
  const valueCounts = countValues(data, dataKey);

  const values = Object.keys(valueCounts);
  const counts = Object.values(valueCounts);

  const chartData = [
    ["Label", "Count"],
    ...values.map((value, index) => [value, counts[index]]),
  ];
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
  };

  return (
    <div>
      <Chart chartType="PieChart" data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
