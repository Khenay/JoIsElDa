import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Nabvar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'




const Main = () => {


    return (
        <div>
            <Routes>
                <Nabvar />
                <Home />
                <Footer />
            </Routes>

        </div>

    );

}

export default Main;