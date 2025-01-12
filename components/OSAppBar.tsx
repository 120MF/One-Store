"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Autocomplete, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function OSAppBar() {
  return (
    <AppBar position="fixed">
      <Toolbar
        className="flex flex-row justify-between items-center"
        variant="regular"
      >
        <Typography variant="h5">One Store</Typography>
        <div className="flex flex-row items-center gap-0 -mr-1">
          {/*<Autocomplete*/}
          {/*  className="w-44 -mt-3.5"*/}
          {/*  renderInput={(params) => (*/}
          {/*    <TextField*/}
          {/*      {...params}*/}
          {/*      label="搜索编号或名称"*/}
          {/*      variant="standard"*/}
          {/*    />*/}
          {/*  )}*/}
          {/*  options={[]}*/}
          {/*/>*/}
          <IconButton aria-label="delete" size="large">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <AddIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
