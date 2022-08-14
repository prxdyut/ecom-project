import { Button } from "@mui/material";
import React from "react";

export default function ExploreCategoryButton(){
    return(
        <React.Fragment>
            <Button fullWidth sx={{ textTransform: 'none', color:'text.secondary' }}>
                Explore Categories {`>>`}
            </Button>
        </React.Fragment>
    )
}