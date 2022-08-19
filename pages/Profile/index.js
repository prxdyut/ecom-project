import { Container } from "@mui/material";

import Action from "../../src/content/Product/Action";
import Box from "@mui/material/Box";
import Carousel from "../../src/content/Product/Carousel";
import CarouselImage from "../../src/content/Product/Carousel/CarouselImage";
import Info from "../../src/content/Product/Info";
import React from "react";
import Recommends from "../../src/content/Product/Recommends";
import Variant from "../../src/content/Product/Action/Variant";
import PageHeader from "../../src/Component/Header";

export default function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <PageHeader>Profile</PageHeader>
        <Box></Box>
      </Container>
    </React.Fragment>
  );
}
