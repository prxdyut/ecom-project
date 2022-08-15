
import React from "react"
import ProductTopbar from "../../Layout/Appbar/Topbar/Product";
import SearchTopbar from "../../Layout/Appbar/Topbar/Search";
import { useRouter } from "next/router"

export default function TopbarProvider(){
    const { pathname } = useRouter();
    
    const Home = pathname == '/Home';
    const Product = pathname == '/Product';
    const Search = pathname == '/Search';

    return(
        <React.Fragment>
            {Home ? null : null}
            {Product ? <ProductTopbar /> : null}
            {Search ? <SearchTopbar /> : null}
        </React.Fragment>
    )
}