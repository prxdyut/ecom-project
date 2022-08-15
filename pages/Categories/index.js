import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import AppBar from "@mui/material/AppBar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import IconButton from "@mui/material/IconButton";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";

const Category = () => {
    return(

        <motion.div
        initial={{ opacity: 0, x: -15, y:5 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Card
          elevation={0}
          sx={{
            display: "flex",
            height: 100,
            justifyContent: "space-between",
            borderRadius: '25px',
          }}
        >
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Cakes
            </Typography>
          </CardContent>
          <CardMedia
            component="div"
            sx={{ width: 150 }}
            image="https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </motion.div>
    )
}

export default function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.white",
          position: "fixed",
          width: "100vw",
          top: "0",zIndex: '2'
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
            Categories{" "}
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
      <br />
      <Container>
        <Stack spacing={2}>
        <Card
          elevation={0}
          sx={{
            height: 100,
            borderRadius: '25px',
            bgcolor: 'primary.main',
          }}
        >
          <CardContent sx={{ display: "flex", alignItems: "center",justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
              Explore Offers
            </Typography>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Upto 50% off
            </Typography>
          </CardContent>
        </Card>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <BottomNav page={1} />
    </React.Fragment>
  );
}
