"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
function MobileFooter() {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="bottom-0 w-full fixed z-100">
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
    </div>
  );
}

export default MobileFooter;
