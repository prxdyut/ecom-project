
import {
    Container,
    Grid,
    Box,
    Typography,
    Button,
    Rating,
    Chip,
    IconButton,
  } from "@mui/material";
  import Image from "next/image";
  import React from "react";
  
  import BottomNavigation from "@mui/material/BottomNavigation";
  import BottomNavigationAction from "@mui/material/BottomNavigationAction";
  import FolderIcon from "@mui/icons-material/Folder";
  import RestoreIcon from "@mui/icons-material/Restore";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  
  import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
  import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
  import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
  import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
  import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
  
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  
  import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
  import { Stack } from "@mui/system";
  
export default function CategoryGrid({height, url, text, align, justify, pt }){
    return(
        <React.Fragment>
                <Box
      sx={{
        height: height,
        background: "url(" + url + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0px -200px 150px -100px rgb(0 0 0 / 75%) inset",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          height: "inherit",
          display: "flex",
          alignItems: align,
          padding: "1rem",
          color: "primary.white",
          justifyContent: justify,
          paddingTop: pt,
        }}
      >
        {text}
      </Typography>
    </Box>
        </React.Fragment>
    )
}