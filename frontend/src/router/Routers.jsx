import React from "react";

import { Routes, Route, Navigate} from 'react-router-dom';
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ScrollToTop from "../shared/ScrollToTop";

const Routers = () => {
  return( 
    <>
   <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Navigate to="/"/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/SearchResultList" element={<SearchResultList/>} />
    
    </Routes>
    </>
  );

};
export default Routers;