import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Toolbar from "@mui/material/Toolbar";
import Input from "@mui/material/Input";

export default function SearchTopbar() {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.white",
          position: "fixed",
          width: "100vw",
          top: "0",
          zIndex: "2",
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="Search"
          >
            <SearchRoundedIcon sx={{ color: "primary.text" }} />
          </IconButton>
          <Input
            placeholder="Search something tasty..."
            inputProps={{ ariaLabel: "Search something tasty..." }}
            disableUnderline
            sx={{ width: "calc(100vw - 2rem - 12px - 8px - 8px - 8px)" }}
          />
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
