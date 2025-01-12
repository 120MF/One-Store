"use client";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function MobileFooter() {
  const [value, setValue] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    switch (value) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/storage");
        break;
      case 2:
        router.push("user");
        break;
      default:
        router.push("/");
        break;
    }
  }, [router, value]);
  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
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
