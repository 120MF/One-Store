"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect, useRef, useState } from "react";
function MobileFooter() {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="首页" icon={<HomeIcon />} />
          <BottomNavigationAction label="仓库" icon={<Inventory2Icon />} />
          <BottomNavigationAction label="我的" icon={<AccountBoxIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default MobileFooter;
