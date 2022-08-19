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

function SummaryWidget() {
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

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>
          Summary
        </Typography>
        <Button
          disabled
          sx={{ color: "primary.main", textTransform: "none" }}
        >
          Change
        </Button>
      </Box>
      <Card elevation={0} sx={{ borderRadius: 5 }}>
        <CardContent>
          <Stack direction="column" spacing={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Order Item 1</Typography>
              <Typography fontWeight="600">$49</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Order Item 2</Typography>
              <Typography fontWeight="600">$19</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Order Item 3</Typography>
              <Typography fontWeight="600">$99</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default SummaryWidget;
