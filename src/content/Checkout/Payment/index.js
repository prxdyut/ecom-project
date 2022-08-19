import { AppBar, Container, Drawer, IconButton, Stack, Toolbar } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from "react";
import Typography from "@mui/material/Typography";

function PaymentWidget() {
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
          Payment
        </Typography>
        <Button onClick={toggleDrawer(true)} sx={{ color: "primary.main", textTransform: "none" }}>
          Change
        </Button>
      </Box>
      <Card elevation={0} sx={{ borderRadius: 5 }}>
        <CardContent>
          <Typography variant="body1" fontWeight={700}>
            {" "}
            Debit/Credit Card
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
                  Payment Method
                </Typography>
              </Toolbar>
            </AppBar>
            <Container sx={{ my: 2 }}>
              <Box>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label="Credit Card"
                    />
                    <FormControlLabel
                      value="debit"
                      control={<Radio />}
                      label="Debit Card"
                    />
                    <FormControlLabel
                      value="upi"
                      control={<Radio />}
                      label="UPI"
                    />
                    <FormControlLabel
                      value="netbanking"
                      control={<Radio />}
                      label="Net Banking"
                    />
                    <FormControlLabel
                      value="wallet"
                      control={<Radio />}
                      label="App Wallet"
                    />
                  </RadioGroup>
                </FormControl>
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

export default PaymentWidget;
