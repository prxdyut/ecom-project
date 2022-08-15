import { Card, Chip, CardMedia, CardActions, Box, IconButton, CardContent, Rating, Typography } from '@mui/material'

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

export default function ProductGrid({ url, name, category, price, rating }) {
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
            sx={{ borderRadius: 5, boxShadow: "primary.main" }}
          />
          <CardActions sx={{ position: "absolute" }}>
            <Box
              elevation={3}
              sx={{
                position: "absolute",
                top: "-27.5px",
                left: "100px",
                bgcolor: "primary.white",
                borderRadius: "25px",
              }}
            >
              <IconButton>
                <FavoriteBorderRoundedIcon />
              </IconButton>
            </Box>
          </CardActions>
          <CardContent sx={{ p: 0, pt: 1 }}>
            <Rating
              name="size-small"
              defaultValue={rating}
              size="small"
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ m: 0, fontWeight: "bold" }}
            >
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
  }