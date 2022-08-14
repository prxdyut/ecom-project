
import CategoryGrid from "./Grid";
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
  
const Grid1 = () => {
  return (
    <CategoryGrid
      height={"50vh"}
      url={
        "https://ribbonsandballoons.com/assets1/uploads/Strawberry-Pastry_834483.jpg"
      }
      text={"New"}
      align={"flex-end"}
      justify={"flex-end"}
    />
  );
};

const Grid2 = () => {
  return (
    <Box
      sx={{
        height: "20vh",
        bgcolor: "primary.white",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "primary.main",
          display: "flex",
          height: "100%",
          alignItems: "flex-end",
          p: 1,
        }}
      >
        New Arrivals
      </Typography>
    </Box>
  );
};

const Grid3 = () => {
  return (
    <CategoryGrid
      height={"25vh"}
      url={
        "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessOpiumPastry2.jpg?v=1632141189"
      }
      text={"New"}
      align={"flex-end"}
      justify={"flex-start"}
    />
  );
};

const Grid4 = () => {
  return (
    <CategoryGrid
      height={"45vh"}
      url={
        "https://bakerpedia.com/wp-content/uploads/2020/06/Pastry_baking-processes-e1593464950587-400x400.jpg"
      }
      text={"New"}
      align={"center"}
      justify={"center"}
      pt={"12rem"}
    />
  );
};

export default function ExploreSection() {
  return (
    <React.Fragment>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid1 />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Grid2 />
              </Grid>
              <Grid item xs={12}>
                <Grid3 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid4 />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
