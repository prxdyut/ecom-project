import React from "react"
import Bottombar from "../../Layout/Appbar/Bottombar"
import ProductBottombar from "../../Layout/Appbar/Bottombar/Product";
import { useRouter } from "next/router"

export default function BottombarProvider(){
    const { pathname } = useRouter();
    
    const Home = pathname == '/Home';
    const Product = pathname == '/Product';
    return(
        <React.Fragment>
            {Home ? <Bottombar /> : null}
            {Product ? <ProductBottombar /> : null}
        </React.Fragment>
    )
}