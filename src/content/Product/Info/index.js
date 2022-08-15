import Box from "@mui/material/Box";
import Category from "./Category";
import Description from "./Description";
import Name from "./Name";
import Price from "./Price";
import Ratings from "./Rating";
import React from "react";

export default function Info() {
  return (
    <React.Fragment>
      <Box
        sx={{
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Name />
          <Category />
          <Ratings />
        </Box>
        <Price />
      </Box>
      <Box>
      <Description />
      </Box>
    </React.Fragment>
  );
}
