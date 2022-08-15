import {
  Container
} from "@mui/material";
import ExploreCategoryButton from "../../src/content/Home/Button";
import ExploreSection from "../../src/content/Home/Explore";
import ProductList from "../../src/content/Home/ProductsList";
import React from "react";

export default function HomePage() {

  return (
    <React.Fragment>
      <ExploreSection />
      <Container>
        <ProductList />
        <ProductList />
        <ExploreCategoryButton/>
      </Container>
    </React.Fragment>
  );
}
