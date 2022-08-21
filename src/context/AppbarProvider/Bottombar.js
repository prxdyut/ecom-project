import React from "react"
import Bottombar from "../../Layout/Appbar/Bottombar"
import ProductBottombar from "../../Layout/Appbar/Bottombar/Product";
import { useRouter } from "next/router"

export default function BottombarProvider(){
    const { pathname } = useRouter();

    const Home = pathname == '/Home';
    const Product = pathname == '/Product';
    const Cart = pathname == '/Cart';
    const Search = pathname == '/Search';
    const Categories = pathname == '/Categories';
    const Profile = pathname == '/Profile';

    return(
        <React.Fragment>
            {Home ? <Bottombar page="Home" /> : null}
            {Cart ? <Bottombar page="Cart" /> : null}
            {Search ? <Bottombar /> : null}
            {Categories ? <Bottombar page="Feed" /> : null}
            {Profile ? <Bottombar page="Profile" /> : null}
            {Product ? <ProductBottombar /> : null}
        </React.Fragment>
    )
}
