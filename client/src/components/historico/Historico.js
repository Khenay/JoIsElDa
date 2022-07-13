import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Historico = () => {
    const [fecha, setFecha] = useState("No es posible mostrar la fecha");
    const [hora, setHora] = useState("No es posible mostrar la hora");
    const [descripcion, setDescripcion] = useState("No es posible mostrar la descripción");
    const [dorsal, setDorsal] = useState("No es posible mostrar el dorsal")
    const [tarjeta, setTarjeta] = useState("No es posible mostrar el número de tarjeta");


    useEffect(() => {
        fetch("competiciones")
            .then((response) => response.json())
            .then((res) => {
                setFecha(res.message[0].fecha);
                setHora(res.message[0].hora)
                setDescripcion(res.message[0].descripcion)
                setDorsal(res.message[0].dorsal)
                setTarjeta(res.message[0].tarjeta)
            })
    })

    return (
        <div>
            <h1>Información de tu competicion</h1>
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