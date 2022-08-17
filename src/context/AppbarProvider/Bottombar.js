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
    
    
    return(
        <React.Fragment>
            {Home ? <Bottombar page="Home" /> : null}
            {Cart ? <Bottombar page="Cart" /> : null}
            {Search ? <Bottombar page="Search" /> : null}
            {Categories ? <Bottombar page="Search" /> : null}
            {Product ? <ProductBottombar /> : null}
        </React.Fragment>
    )
}