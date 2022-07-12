import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/navbar/Navbar';
import { Link } from "react-router-dom";
// import Home from '../components/home/Home'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'
import Login from "../components/login/Login";
import Registro from "../components/registro/Registro";


const Main = () => {

    return (
        <div>
            <NavBar /> 
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registro" element={<Registro />}/>
                {/* <Route path="/as" element={<Footer />}/>  */}
            </Routes>
            <Footer />
        </div>

    );

}

export default Main;