import { Container } from "@mui/material";

import Action from "../../src/content/Product/Action";
import Box from "@mui/material/Box";
import Carousel from "../../src/content/Product/Carousel";
import CarouselImage from "../../src/content/Product/Carousel/CarouselImage";
import Info from "../../src/content/Product/Info";
import React from "react";
import Recommends from "../../src/content/Product/Recommends";
import Variant from "../../src/content/Product/Action/Variant";

export default function HomePage() {
  const variants = [
    { id: "opt_1", value: "Chocolate" },
    { id: "opt_2", value: "Strawberry" },
    { id: "opt_3", value: "Pineapple" },
  ];
  return (
    <React.Fragment>
      <Container>
        <Carousel>
          <CarouselImage
            src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
            alt="Cake"
          />
          <CarouselImage
            src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
            alt="Cake"
          />
          <CarouselImage
            src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
            alt="Cake"
          />
          <CarouselImage
            src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
            alt="Cake"
          />
          <CarouselImage
            src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
            alt="Cake"
          />
        </Carousel>
        <Action>
          <Variant variants={variants} />
        </Action>
        <Box>
          <Info />
        </Box>
        <Box>
          <Recommends />
        </Box>
      </Container>
    </React.Fragment>
  );
}
