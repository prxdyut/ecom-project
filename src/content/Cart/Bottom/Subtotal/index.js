import { Button, Typography, Box } from "@mui/material";
import React from "react";

export default function CartSubtotal() {
    return(
        <React.Fragment>
            <Box sx={{display: 'flex',
justifyContent: 'space-between', py:1, alignItems: 'center'}}>
                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                    Subtotal:
                </Typography>
                <Typography variant="h6" >
                    $99.09
                </Typography>
            </Box>
        </React.Fragment>
    )
}