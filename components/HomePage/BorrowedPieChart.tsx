import { PieChart } from "@mui/x-charts/PieChart";
import ComponentCard from "@/components/ComponentCard";

export default function BorrowedPieChart() {
  return (
    <ComponentCard title="借出物料分布图" subtitle="借出较多的物料">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "DJI M3508" },
              { id: 1, value: 15, label: "DJI M2006" },
              { id: 2, value: 20, label: "DM 4310" },
            ],
            innerRadius: 50,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 315,
          },
        ]}
        width={350}
        height={200}
      />
    </ComponentCard>
  );
}
