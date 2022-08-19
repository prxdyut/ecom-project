import { Button } from "@mui/material";
import Link from 'next/link';
import React from "react";

export default function CartButton() {
    return(
        <React.Fragment>
            <Link href='/Checkout'>
            <Button fullWidth elevation={0} variant="contained" sx={{ boxShadow: 0 ,textTransform: 'none', borderRadius: 5}}>
                Proceed
            </Button></Link>
        </React.Fragment>
    )
}