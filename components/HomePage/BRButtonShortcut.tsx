import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import * as React from "react";

function BRButtonShortcut() {
  return (
    <Card className="m-2 p-0">
      <CardContent className="flex flex-col justify-around -mb-1">
        <Typography className="pl-1 pt-2" variant="h5" gutterBottom>
          快捷借/归
        </Typography>
        <div className="flex flex-row gap-4">
          <Button className="flex-grow" variant="contained" color="secondary">
            借出
          </Button>
          <Button className="flex-grow" variant="contained" color="success">
            归还
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BRButtonShortcut;
