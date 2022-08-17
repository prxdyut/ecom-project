import CartProductGrid from "../../src/content/Cart/List";
import React from "react";
import CartBottom from "../../src/content/Cart/Bottom";
import { Container, Box } from "@mui/material";

export default function CartPage(){
    return(
<React.Fragment>
    <Container>
        <Box>
    <CartProductGrid /></Box>
    <Box sx={{position: 'fixed', bottom: 56, left:0, py: 1, width: '100%'}}>
    <CartBottom /></Box></Container>
</React.Fragment>
    )
}