import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from '@mui/material/Paper';
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Select from "@mui/material/Select";
import { Tab } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Tabs } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";

export default function Favourite({  }){
    return(
        <Box>
        <IconButton
          sx={{
            bgcolor: "primary.white",
            borderRadius: "25px",
          }}
        >
          <FavoriteBorderRoundedIcon />
        </IconButton>
      </Box>
    )
}