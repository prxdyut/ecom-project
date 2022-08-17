
import React from "react";
import DefaultTopbar from "../../Layout/Appbar/Topbar";
import SearchTopbar from "../../Layout/Appbar/Topbar/Search";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function TopbarProvider(){
    const { pathname } = useRouter();
    
    const Home = pathname == '/Home';
    const Product = pathname == '/Product';
    const Search = pathname == '/Search';
    const Cart = pathname == '/Cart';
    const Categories = pathname == '/Categories';

    return(
        <React.Fragment>
            {Home ? null : null}
            {Product ? <DefaultTopbar head="Product" /> : null}
            {Cart ? <DefaultTopbar head="Cart" /> : null}
            {Categories ? <DefaultTopbar head="Categories" /> : null}
            {Search ? <SearchTopbar /> : null}
            <NextNProgress />
        </React.Fragment>
    )
}