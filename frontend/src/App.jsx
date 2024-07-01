import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Routers from "./router/Routers";
const App = () => {
  return (
    <>
     <Routers/>
     <Layout/>
   
    </>
  );
}

export default App;
