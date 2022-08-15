import React from "react";
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
import Action from "../../src/content/Product/Action";
import AppBar from "@mui/material/AppBar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Box from "@mui/material/Box";
import Carousel from "../../src/content/Product/Carousel";
import CarouselImage from "../../src/content/Product/Carousel/CarouselImage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Favourite from "../../src/content/Product/Action/Favourite";
import IconButton from "@mui/material/IconButton";
import Info from "../../src/content/Product/Info";
import Paper from "@mui/material/Paper";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Variant from "../../src/content/Product/Action/Variant";
import Input from "@mui/material/Input";
import Results from "../../src/content/Search/Results";

export default function SearchPage() {
  return (
    <React.Fragment>
      <Results />
    </React.Fragment>
  );
}
