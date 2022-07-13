import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/navbar/Navbar';
import { Link } from "react-router-dom";
// import Home from '../components/home/Home'
import Home from '../components/home/Home'
import Footer from '../components/footer/Footer'
import Login from "../components/login/Login";
import PaginatedItems from '../components/paginado/Paginado'
import Registro from "../components/registro/Registro";
import Competiciones from "../components/competiciones/Competiciones";
import Pago from "../components/pago/Pago";
import Historico from "../components/historico/Historico";
import Actualizar from "../components/actualizarDatos/Actualizar";


const Main = () => {

    return (
        <div>
            <NavBar /> 
            <Routes>
                <Route path="/login" element={<Login />}/>

                <Route path="/registro" element={<Registro />}/>
                <Route path="/" element={<Competiciones />}/>
                <Route path="/pago" element={<Pago />}/>
                <Route path="/historico" element={<Historico />}/>
                <Route path="/cuenta" element={<Actualizar />}/>
                {/* <Route path="/as" element={<Footer />}/>  */}
            </Routes>
            <Footer />
        </div>

    );

}

export default Main;