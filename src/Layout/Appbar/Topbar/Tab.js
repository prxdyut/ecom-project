import { Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Link from "next/link";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Stack } from "@mui/system";
import { useRouter } from "next/dist/client/router";

export default function TabTopbar({ }) {
const Router = useRouter();
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box></Box>
          <Box>
          <Link href='./Search'> 
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <SearchRoundedIcon sx={{ color: "primary.text" }} />
          </IconButton></Link></Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
