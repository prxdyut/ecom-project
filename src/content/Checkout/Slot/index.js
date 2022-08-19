import { Container, Stack, Drawer, Toolbar, IconButton, AppBar } from "@mui/material";

import Box from "@mui/material/Box";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function DeliverySlotWidget() {
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['bottom']: open });
  };


  return (
    <React.Fragment>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>
          Time
        </Typography>
        <Button onClick={toggleDrawer(true)} sx={{ color: "primary.main", textTransform: "none" }}>
          Change
        </Button>
      </Box>
      <Card elevation={0} sx={{ borderRadius: 5 }}>
        <CardContent>
          <Typography variant="body1" sx={{ textTransform: "none" }}>
            {" "}
            Slot: 9am to 11am
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
                  Time Slot
                </Typography>
              </Toolbar>
            </AppBar>
            <Container sx={{ my: 2 }}>
              <Box>
<Button variant="filled" sx={{my:1}}>8:00 AM to 11:00 AM</Button>
<Button variant="filled" sx={{my:1}}>2:00 PM to 5:00 AM</Button>
<Button variant="filled" sx={{my:1}}>7:00 PM to 9:00 AM</Button>
              </Box>
            </Container>
            <Box sx={{ textAlign: "end", p: 2 }}>
              <Button onClick={toggleDrawer(false)}>{"Done"}</Button>
            </Box>
          </Box>
        </Drawer>
    </React.Fragment>
  );
}

export default DeliverySlotWidget;
