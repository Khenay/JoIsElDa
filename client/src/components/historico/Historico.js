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
        </div>
    )
}

export default Historico;