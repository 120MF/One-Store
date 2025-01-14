import { LineChart } from "@mui/x-charts/LineChart";
import ComponentCard from "@/components/ComponentCard";

export default function BRLineChart() {
  return (
    <ComponentCard title="物料出入表" subtitle="借出/归还的物料统计">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            label: "借出",
          },
          {
            data: [3, 2.5, 6, 5.5, 2.5, 5],
            label: "归还",
          },
        ]}
        width={350}
        height={250}
      />
    </ComponentCard>
  );
}
