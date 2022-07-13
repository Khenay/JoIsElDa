import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'
import Login from "../components/login/Login";
import PaginatedItems from '../components/paginado/Paginado'


const Main = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />}/>
                <Route path="/login" element={<Login />}/>
                <Route path='/paginado' element={<PaginatedItems />}/>
                {/* <Home />
                <Footer /> */}
            </Routes>

        </div>

    );

}

export default Main;