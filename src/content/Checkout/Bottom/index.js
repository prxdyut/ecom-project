import { Container, Stack, Drawer, Toolbar, IconButton, AppBar } from "@mui/material";
import Link from 'next/link';
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

function BottomWidget() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <Stack direction="column" spacing={2} sx={{ marginBottom: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="600" sx={{ color: "text.secondary" }}>
            Subtotal
          </Typography>
          <Typography fontWeight="600">$49</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="600" sx={{ color: "text.secondary" }}>
            Shiping + Taxes
          </Typography>
          <Typography fontWeight="600">$19</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="600" sx={{ color: "text.primary" }}>
            Total:
          </Typography>
          <Typography fontWeight="600">$99</Typography>
        </Box>
      </Stack>
      <Link href={'Checkout/Success'}> 
      <Button
        variant="contained"
        fullWidth
        sx={{ boxShadow: 0, borderRadius: 5 }}
      >
        Pay now
      </Button>
      </Link>
    </React.Fragment>
  );
}
export default BottomWidget;
