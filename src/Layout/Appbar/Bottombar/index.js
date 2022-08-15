import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function Bottombar1({ page }) {
  const [value, setValue] = React.useState(page);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: "0",
        width: "100vw",
        borderRadius: "15px 15px 0px 0px",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeRoundedIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={<SearchRoundedIcon />}
      />
      <BottomNavigationAction
        label="Bag"
        value="Bag"
        icon={<ShoppingBagRoundedIcon />}
      />
      <BottomNavigationAction
        label="Favourite"
        value="Favourite"
        icon={<FavoriteRoundedIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        icon={<PersonRoundedIcon />}
      />
    </BottomNavigation>
    </React.Fragment>
  );
}
