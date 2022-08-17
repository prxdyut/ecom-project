import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Popover,
    Stack,
    Typography
} from "@mui/material";

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Fade from '@mui/material/Fade';
import IconButton from "@mui/material/IconButton";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Popper from '@mui/material/Popper';
import React from "react";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function ProductGrid (){
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
        return (
    <Card
                        elevation={0}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            borderRadius: 4,
                        }}
                    >
                        <CardMedia
                            component="div"
                            sx={{ minWidth: 100 }}
                            image="https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg"
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ display: "flex", flexDirection: 'column', p: 1, paddingBottom: '8px!important', }}>
                            <Stack direction={'row'}>
                                <Typography noWrap variant="h6" sx={{ fontWeight: 700, maxWidth: 'calc(100vw - 16px - 16px - 8px - 8px - 100px - 1rem - 8px - 8px)', minWidth: 'calc(100vw - 16px - 16px - 8px - 8px - 100px - 1rem - 8px - 8px)' }}>
                                    Chocolate Cake
                                </Typography>
                                <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                                    <MoreVertRoundedIcon />
                                </IconButton>
                            </Stack>
                            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                Cakes
                            </Typography>
                            <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                                <IconButton> <RemoveRoundedIcon /> </IconButton>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    16
                                </Typography>
                                <IconButton> <AddRoundedIcon /> </IconButton>
                            </Stack>
                                <Typography noWrap variant="h6" sx={{px: 2}} >
                                    $9.00
                                </Typography>
                            </Stack>
                        </CardContent>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      onClick={handleClose}
    >
    
    <Box  onClick={handleClick} sx={{ borderRadius:5, bgcolor: 'white' }}>
                  {/* <Button disableRipple fullWidth sx={{textTransform: 'none', fontWeight: '700', justifyContent: 'left'}}>
                    Add to later
                  </Button>
                  <Divider /> */}
                  <Button disableRipple sx={{color: 'black', textTransform: 'none', px:3}}>
                    Remove from Cart
                  </Button>
                </Box>
    </Popover>
                    </Card>
        )
    }
    