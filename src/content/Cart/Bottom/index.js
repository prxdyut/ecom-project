import { Box, Container } from "@mui/material";
import CartButton from "./Button";
import CartSubtotal from "./Subtotal";

export default function CartBottom(){
    return(
        <Box>
            <Container>
            <CartSubtotal />
        <CartButton /></Container>
        </Box>
    )
}