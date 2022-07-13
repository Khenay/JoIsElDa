import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PaginatedItems from '../paginado/Paginado'

const Historico = () => {


    return (
        <div>
            <h1>Información de tu competicion</h1>
            <div id='paginado'>

                <PaginatedItems itemsPerPage={1} />
            </div>
            <div className="cont">
                <div className="container-hist">
                    <div className="fecha">
                        <h3>Fecha: </h3>
                        <p>{fecha}</p>
                    </div>
                    <div className="hora">
                        <h3>Hora: </h3>
                        <p>{hora}</p>
                    </div>
                    <div className="descripcion">
                        <h3>Descripción: </h3>
                        <p>{descripcion}</p>
                    </div>
                    <div className="hora">
                        <h3>Dorsal: </h3>
                        <p>{dorsal}</p>
                    </div>
                    <div className="tarjeta">
                        <h3>Tarjeta: </h3>
                        <p>{tarjeta}</p>
                    </div>

                </div>
            </div>
            <h1>Aquí va la paginación sustituir</h1>
        </div>
    )
}

export default Historico;