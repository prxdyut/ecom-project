import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "next/link";

export default function Results() {
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <Link href="/Home">
            <ListItemButton sx={{paddingInlineStart: 5}}>
              <ListItemText primary="Choco Lava Cake" secondary="Cakes" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/Product">
            <ListItemButton sx={{paddingInlineStart: 5}}>
              <ListItemText primary="Dark Forest Cake" secondary="Cakes" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
