import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import ProductGrid from "./Grid";

export default function Recommends() {
  return (
    <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="700">
                You might also like
              </Typography>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none", color: "text.secondary" }}>
                {" "}
                View all{" "}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              overflow: "auto",
              width: "100vw",
              marginInline: "-16px",
              padding: "16px",
              position: "relative",
            }}
            id="ProductList"
          >
            <Stack sx={{ width: "max-content" }} direction="row" spacing={3}>
              <ProductGrid
                url={
                  "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
                }
                name={"Plum Cake"}
                category={"Cakes"}
                price={"₹25"}
                rating={4.5}
              />
              <ProductGrid
                url={
                  "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
                }
                name={"Plum Cake"}
                category={"Cakes"}
                price={"₹25"}
                rating={4.5}
              />
              <ProductGrid
                url={
                  "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
                }
                name={"Plum Cake"}
                category={"Cakes"}
                price={"₹25"}
                rating={4.5}
              />
              <ProductGrid
                url={
                  "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
                }
                name={"Plum Cake"}
                category={"Cakes"}
                price={"₹25"}
                rating={4.5}
              />
            </Stack>
            </Box>
            </React.Fragment>
  );
}