"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Autocomplete, IconButton, TextField, Typography } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

export default function OSAppBar() {
  return (
    <AppBar position="static">
      <Toolbar
        className="flex flex-row justify-between items-center"
        variant="regular"
      >
        <Typography variant="h6">One Storage</Typography>
        <div className="flex flex-row items-center">
          <Autocomplete
            className="w-44 -mt-3.5"
            renderInput={(params) => (
              <TextField
                {...params}
                label="搜索编号或名称"
                variant="standard"
              />
            )}
            options={[]}
          />
          <IconButton aria-label="delete" size="large">
            <QrCodeScannerIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
