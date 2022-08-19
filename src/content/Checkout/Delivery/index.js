import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import Typography from "@mui/material/Typography";

function DeliveryWidget() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, ["bottom"]: open });
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>
          Delivery
        </Typography>
        <Button
          onClick={toggleDrawer(true)}
          sx={{ color: "primary.main", textTransform: "none" }}
        >
          Change
        </Button>
      </Box>
      <Card elevation={0} sx={{ borderRadius: 5 }}>
        <CardContent>
          <Typography variant="body1" fontWeight={700}>
            {" "}
            Pradyut Das
          </Typography>
          <Typography variant="body2">
            {" "}
            XYZ, abc, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Card>

      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <AppBar
            position="sticky"
            sx={{
              bgcolor: "primary.white",
              position: "sticky",
              width: "100vw",
              top: "0",
              zIndex: "2",
            }}
            elevation={0}
          >
            <Toolbar sx={{}}>
              <IconButton
                onClick={toggleDrawer(false)}
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <CloseRoundedIcon sx={{ color: "primary.text" }} />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Delivery Address
              </Typography>
            </Toolbar>
          </AppBar>
          <Container sx={{ my: 2, maxHeight: "75vh", overflow: "scroll" }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <TextField
                  id="firstName"
                  type={"text"}
                  label="First name"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
                <TextField
                  id="lastName"
                  type={"text"}
                  label="Last Name"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>

              <TextField
                id="Email"
                label="Email"
                type={"email"}
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                id="phone"
                label="Phone"
                type={"number"}
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                id="address"
                label="Address"
                variant="filled"
                multiline
                minRows={3}
                maxRows={4}
                fullWidth
                InputProps={{ disableUnderline: true }}
              />

              <Stack direction="row" spacing={1}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    label="City"
                    id="city"
                    variant="filled"
                    fullWidth
                    disableUnderline
                  >
                    <MenuItem value={"east"}>{"Nallasopara (East)"}</MenuItem>
                    <MenuItem value={"west"}>{"Nallasopara (West)"}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    label="State"
                    id="state"
                    variant="filled"
                    fullWidth
                    disableUnderline
                  >
                    <MenuItem value={"mah"}>{"Maharashtra"}</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <TextField
                id="pincode"
                label="Pincode"
                variant="filled"
                type="number"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  label="Country"
                  id="country"
                  variant="filled"
                  fullWidth
                  disableUnderline
                >
                  <MenuItem value={"IN"}>{"India"}</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Container>
          <Box sx={{ textAlign: "end", p: 2 }}>
            <Button onClick={toggleDrawer(false)}>{"Done"}</Button>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default DeliveryWidget;
