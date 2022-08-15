import { Box, Button, Container, IconButton } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import React from "react";
import { Stack } from "@mui/system";

export default function ProductBottombar({ page }) {
  const [value, setValue] = React.useState(page);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          py: 1,
          background: "white",
          width: "100%",
        }}
      >
        <Container>
          <Stack direction="row" spacing={2}>
            <Button
        elevation={0}
            size="small"
              fullWidth
              variant="contained"
              sx={{ bgcolor: "primary.main", borderRadius: 15, fontWeight: 600, boxShadow: 0 }}
            >
              Add to cart
            </Button>
        <IconButton
          sx={{
            bgcolor: "primary.white",
            borderRadius: "25px",
          }}
        >
          <FavoriteBorderRoundedIcon sx={{color: 'black'}}  />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "primary.white",
            borderRadius: "25px",
          }}
        >
          <ShareRoundedIcon sx={{color: 'black'}} />
        </IconButton>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
}
