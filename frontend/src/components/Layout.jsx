import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "../shared/SearchBar";
import Reviews from "../pages/Reviews";
import Home from "../pages/Home";

const Layout = () => {

    return <>
    <Header/>
    <Home/>
    <Reviews/>
    <Footer/>
    </>

};
export default Layout;