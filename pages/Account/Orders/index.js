import { Container, Card, CardHeader, Avatar, Typography, ListItemButton, Divider, Chip } from "@mui/material";

import React from "react";
import PageHeader from "../../../src/Component/Header";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function OrdersPage() {
  return (
    <React.Fragment>
      <Container>
        <PageHeader>My Orders</PageHeader>
        <Chip clickable label="Ordered" />
        <Chip clickable label="Ordered" />
        <Chip clickable label="Ordered" />
        <Card>
        </Card>
      </Container>
    </React.Fragment>
  );
}
