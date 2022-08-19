import { Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import React from "react";
import { Stack } from "@mui/system";
  import AppBar from "@mui/material/AppBar";
  import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
  import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
  import { useRouter } from "next/dist/client/router";
  import Link from "next/link";
  import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function ProductTopbar({ head }) {
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
          <IconButton
          onClick={() => Router.back()}
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosNewRoundedIcon sx={{ color: "primary.text" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
