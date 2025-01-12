import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@mui/material";

export default function BorrowedPieChart() {
  return (
    <Card className="w-full m-2 p-0 flex flex-col">
      <CardContent>
        <Typography className="pl-1 pt-2" variant="h5">
          借出物料分布图
        </Typography>
        <Typography className="pl-1" variant="subtitle1" color="textDisabled">
          借出较多的物料
        </Typography>
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
      </CardContent>
    </Card>
  );
}
