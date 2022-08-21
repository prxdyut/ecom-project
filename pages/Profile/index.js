import { Container, Card, CardHeader, Avatar, Typography, ListItemButton, Divider } from "@mui/material";

import React from "react";
import PageHeader from "../../src/Component/Header";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <PageHeader>Profile</PageHeader>
        <CardHeader
        sx={{px:0}}
          avatar={
            <Avatar
              alt="Pradyut Das"
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              sx={{ width: 56, height: 56 }}
            />
          }
          title={
            <Typography variant="h6" fontWeight="700">
              Pradyut Das
            </Typography>
          }
          subheader={
            <Typography sx={{ color: "text.secondary" }}>
              daspradyut516@gmail.com
            </Typography>
          }
        />
           <List sx={{
width: '100vw',
mx: -2}}>
<ListItemButton>
      <ListItem sx={{px:0,}}>
        <ListItemText primary="My Orders" secondary="You already have 12 orders" />
        <ListItemButton sx={{maxWidth: 'min-content'}}>></ListItemButton>
      </ListItem></ListItemButton><Divider /><ListItemButton>

      <ListItem sx={{px:0,}}>
        <ListItemText primary="My Address" secondary="3 Shipping Addresses" />
        <ListItemButton sx={{maxWidth: 'min-content'}}>></ListItemButton>
      </ListItem></ListItemButton><Divider /><ListItemButton>

      <ListItem sx={{px:0,}}>
        <ListItemText primary="Promo Codes" secondary="Feature coming soon" />
        <ListItemButton sx={{maxWidth: 'min-content'}}>></ListItemButton>
      </ListItem></ListItemButton><Divider /><ListItemButton>

      <ListItem sx={{px:0,}}>
        <ListItemText primary="My Reviews" secondary="Feature coming soon" />
        <ListItemButton sx={{maxWidth: 'min-content'}}>></ListItemButton>
      </ListItem></ListItemButton><Divider /><ListItemButton>

      <ListItem sx={{px:0,}}>
        <ListItemText primary="Settings" secondary="Notifications, Passwords" />
        <ListItemButton sx={{maxWidth: 'min-content'}}>></ListItemButton>
      </ListItem></ListItemButton>
    </List>
      </Container>
    </React.Fragment>
  );
}
