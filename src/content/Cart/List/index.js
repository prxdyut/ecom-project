import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Popover,
    Stack,
    Typography
} from "@mui/material";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Fade from '@mui/material/Fade';
import IconButton from "@mui/material/IconButton";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Popper from '@mui/material/Popper';
import React from "react";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import ProductGrid from './Grid';

export default function CartProductGrid() {
    return (
        <React.Fragment>
                <Stack direction="column" spacing={2}>
            <ProductGrid />
            <ProductGrid />
           </Stack> </React.Fragment>
    )
}