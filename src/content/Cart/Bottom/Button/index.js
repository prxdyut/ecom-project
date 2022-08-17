import { Button } from "@mui/material";
import React from "react";

export default function CartButton() {
    return(
        <React.Fragment>
            <Button fullWidth elevation={0} variant="contained" sx={{ boxShadow: 0 ,textTransform: 'none', borderRadius: 5}}>
                Proceed
            </Button>
        </React.Fragment>
    )
}