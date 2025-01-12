import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

export default function BRLineChart() {
  return (
    <Card className="w-full m-2 p-0 flex flex-col">
      <CardContent>
        <Typography className="pl-1 pt-2" variant="h5">
          物料出入表
        </Typography>
        <Typography className="pl-1" variant="subtitle1" color="textDisabled">
          借出/归还的物料统计
        </Typography>
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
      </CardContent>
    </Card>
  );
}
