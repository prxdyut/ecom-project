import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    IconButton,
    Rating,
    Typography,
} from "@mui/material";

import Product from "./Product";
import React from "react";
import { Stack } from "@mui/system";

function ProductList () {
return(
    <React.Fragment>
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ my: 3 }}>
          <Typography variant="h4" fontWeight="1000">
            Offers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Super Summer Sale on Products
          </Typography>
        </Box>
        <Box>
          <Button sx={{ textTransform: "none", color: "text.secondary" }}>
            {" "}
            View all{" "}
          </Button>
        </Box>
      </Box>
      <Box sx={{ overflow: "auto", width: '100vw',
marginInline: '-16px',
padding: '16px', position: 'relative' }} id="ProductList">
        <Stack sx={{ width: "max-content" }} direction="row" spacing={3}>
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
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
    </Box>
    </React.Fragment>
)
}

export default ProductList;