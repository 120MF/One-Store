import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

interface ComponentCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

function ComponentCard({ children, title, subtitle }: ComponentCardProps) {
  return (
    <Card className="m-2 p-0 flex flex-col">
      <CardContent>
        <Typography className="pl-1 pt-2" variant="h5">
          {title}
        </Typography>
        <Typography
          className="pl-1 pb-2"
          variant="subtitle1"
          color="textDisabled"
        >
          {subtitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default ComponentCard;
