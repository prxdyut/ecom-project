import DefaultTopbar from "../../Layout/Appbar/Topbar";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import SearchTopbar from "../../Layout/Appbar/Topbar/Search";
import TabTopbar from "../../Layout/Appbar/Topbar/Tab";
import CheckoutTopbar from "../../Layout/Appbar/Topbar/Checkout";
import TabWithBackTopbar from "../../Layout/Appbar/Topbar/TabWithBack"
import { useRouter } from "next/router";

export default function TopbarProvider(){
    const { pathname } = useRouter();

    const Home = pathname == '/Home';
    const Product = pathname == '/Product';
    const Search = pathname == '/Search';
    const Cart = pathname == '/Cart';
    const Categories = pathname == '/Categories';
    const Checkout = pathname == '/Checkout';
    const Profile = pathname == '/Profile';
    const Orders = pathname == '/Account/Orders';

    return(
        <React.Fragment>
            {Home ? null : null}
            {Product ? <DefaultTopbar head="Product" /> : null}
            {Orders ? <TabWithBackTopbar head="My Orders" /> : null}
            {Cart ? <TabTopbar/> : null}
            {Categories ? <TabTopbar /> : null}
            {Profile ? <TabTopbar /> : null}
            {Search ? <SearchTopbar /> : null}
            {Checkout ? <CheckoutTopbar /> : null}
            <NextNProgress />
        </React.Fragment>
    )
}
