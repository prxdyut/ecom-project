import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ExploreCategoryButton(){
    return(
        <React.Fragment>
            <Link href="./Categories">
            <Button fullWidth sx={{ textTransform: 'none', color:'text.secondary' }}>
                Explore Categories {`>>`}
            </Button></Link>
        </React.Fragment>
    )
}