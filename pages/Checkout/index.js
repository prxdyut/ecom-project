import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";

import BottomWidget from "../../src/content/Checkout/Bottom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeliveryWidget from "../../src/content/Checkout/Delivery";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import PageHeader from "../../src/Component/Header";
import PaymentWidget from "../../src/content/Checkout/Payment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import SlotWidget from "../../src/content/Checkout/Slot";
import SummaryWidget from "../../src/content/Checkout/Summary";
import Typography from "@mui/material/Typography";

export default function TransactionPage() {

  return (
    <React.Fragment>
      <Container>
        <PageHeader>Checkout</PageHeader>
        <Box sx={{ py: 2 }}>
          <DeliveryWidget />
        </Box>
        <Box sx={{ py: 2 }}>
          <PaymentWidget />
        </Box>
        <Box sx={{ py: 2 }}>
          <SlotWidget />
        </Box>
        <Box sx={{ py: 2 }}>
          <SummaryWidget />
        </Box>
        <Box
          sx={{ bgcolor: "primary.bg", py: 2, position: "sticky", bottom: "0" }}
        >
          <BottomWidget />
        </Box>
      </Container>
    </React.Fragment>
  );
}
