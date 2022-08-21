import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Container } from "@mui/material";

import { useRouter } from 'next/router';

export default function Bottombar1({ page }) {
  const Router = useRouter();
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
      disableRipple
      onClick={() => Router.push('./Home')}
        value="Home"
        // label="Home"
        icon={<HomeRoundedIcon   />}
      />
      <BottomNavigationAction
      onClick={() => Router.push('./Categories')}
      disableRipple
        value="Feed"
        // label="Search"
        icon={<AppsRoundedIcon   />}
      />
      <BottomNavigationAction
      onClick={() => Router.push('./Cart')}
      disableRipple
        value="Cart"
        // label="Bag"
        icon={<ShoppingBagRoundedIcon   />}
      />
      {/* <BottomNavigationAction
        value="Favourite"
        icon={<FavoriteRoundedIcon sx={{fontSize: 'xx-large', color: 'black'}} />}
      /> */}
      <BottomNavigationAction
      onClick={() => Router.push('./Profile')}
      disableRipple
        // label="Profile"
        value="Profile"
        icon={<PersonRoundedIcon   />}
      />
    </BottomNavigation>
    </React.Fragment>
  );
}
