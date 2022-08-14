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
import BottomNav from "../../src/Layout/BottomNav";
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

function Product ({ url, name, category, price, rating }) {
  return (
    <>
    <Card sx={{ width: 150, bgcolor: "primary.bg" }} elevation={0}>
      <Chip
          label="-20%"
          size="small"
          color="primary"
          sx={{ position: "absolute", margin: "7.5px" }}
        />
      <CardMedia
        component="img"
        height="200"
        image={url}
        alt="Pastry"
        elevation={3}
        sx={{ borderRadius: 5, boxShadow: 'primary.main' }}
      />
      <CardActions sx={{ position: "absolute" }}>
        <Box
            elevation={3}
            sx={{
              position: "absolute",
              top: "-27.5px",
              left: "100px",
              bgcolor: "primary.white",
              borderRadius: "25px"
            }}>
          <IconButton
          >
            <FavoriteBorderRoundedIcon />
          </IconButton></Box>
        </CardActions>
      <CardContent sx={{ p: 0, pt: 1 }}>
        <Rating name="size-small" defaultValue={rating} size="small" readOnly />
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography gutterBottom variant="h6" sx={{ m: 0, fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HomePage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.white",
          position: "fixed",
          width: "100vw",
          top: "0",
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosNewRoundedIcon sx={{ color: "primary.text" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Product
          </Typography>
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <SearchRoundedIcon sx={{ color: "primary.text" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Container>
        <Box
          sx={{
            overflow: "auto",
            height: "max-content",
            width: "100vw",
            marginInline: "-16px",
          }}
        >
          <Stack
            direction="row"
            sx={{ height: "max-content", width: "max-content" }}
            spacing={1}
          >
            <Box>
              <Image
                src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
                alt="Cake"
                width={400}
                height={400}
                blurDataURL="https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=1200&q=75"
                 
                 
                placeholder="blur" // Optional blur-up while loading
              /> 
            </Box>
            <Box>
              <Image
                src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
                alt="Cake"
                width={400}
                height={400}
                blurDataURL="https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=1200&q=75"
                 
                 
                placeholder="blur" // Optional blur-up while loading
              /> 
            </Box>
            <Box>
              <Image
                src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
                alt="Cake"
                width={400}
                height={400}
                blurDataURL="https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=1200&q=75"
                 
                 
                placeholder="blur" // Optional blur-up while loading
              />
            </Box>
            <Box>
              <Image
                src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
                alt="Cake"
                width={400}
                height={400}
                blurDataURL="https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=1200&q=75"
                 
                 
                placeholder="blur" // Optional blur-up while loading
              /> 
            </Box>
            <Box>
              <Image
                src="https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0320.jpg"
                alt="Cake"
                width={400}
                height={400}
                blurDataURL="https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=1200&q=75"
                 
                 
                placeholder="blur" // Optional blur-up while loading
              /> 
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120, m: 0 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Variant
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
              disableUnderline={true}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
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
        </Box>

        <Box
          sx={{
            my: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "text.primary",
                textAlign: "flex-start",
                fontWeight: "600",
              }}
            >
              Product
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "secondary.text",
                textAlign: "flex-start",
              }}
            >
              Category
            </Typography>
            
        <Rating name="size-small" defaultValue={4.5} size="small" readOnly sx={{ mt:1 }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
              textAlign: "flex-start",
              fontWeight: "600",
            }}
          >
            ₹19.99
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: "flex-start",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </Box>
        <Box sx={{width: '100vw',
mx: '-16px', my: 2 }}>
          <Divider />
          <Accordion elevation={0} sx={{bgcolor: 'primary.bg'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Ingredients</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0} sx={{bgcolor: 'primary.bg'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
            <Rating name="size-large" defaultValue={5} size="large" />
              <Typography component="span" variant="body1" sx={{ color: 'text.secondary' }}>
                {"(5)"}
              </Typography></Box>
              <Stack spacing={2}>
              <Typography>
                {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.{'"'}
              </Typography>
              <Typography>
                {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.{'"'}
              </Typography>
              <Typography>
                {'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.{'"'}
              </Typography></Stack>
            </AccordionDetails>
          </Accordion>
          <Divider />
        </Box>
        <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="700">
            You might also like
          </Typography>
        </Box>
        <Box>
          <Button sx={{ textTransform: "none", color: "text.secondary" }}>
            {" "}
            View all{" "}
          </Button>
        </Box>
      </Box>
      <Box sx={{ overflow: "auto", width: '100vw',
marginInline: '-16px',
padding: '16px', position: 'relative' }} id="ProductList">
        <Stack sx={{ width: "max-content" }} direction="row" spacing={3}>
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
          <Product
            url={
              "https://c.ndtvimg.com/2020-02/kjtgr96_pastry_625x300_14_February_20.jpg"
            }
            name={"Plum Cake"}
            category={"Cakes"}
            price={"₹25"}
            rating={4.5}
          />
        </Stack>
      </Box>
    </Box>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          paddingBlock: "16px",
          background: "white",
          width: "100%",
        }}
      >
        <Container>
          <Box sx={{ bgcolor: "primary.main", p: 1, borderRadius: 5 }}>
            <Button
              fullWidth
              variant="fill"
              sx={{ color: "primary.white", borderRadius: "inherit" }}
            >
              Add to cart
            </Button>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
