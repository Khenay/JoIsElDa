import React, { useState, useEffect } from "react";

const Competiciones = () => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [lugar, setLugar] = useState("");
    const [ubicacion, setubicacion] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [precio, setPrecio] = useState("");
    const [participantes, setParticipantes] = useState("");
   

    useEffect(() => {
        fetch("competiciones")
            .then((response) => response.json())
            .then((res) => {
                setNombre(res.message[0].nombre);
                setTipo(res.message[0].tipo);
                setDescripcion(res.message[0].descripcion);
                setLugar(res.message[0].lugar);
                setubicacion(res.message[0].ubicacion);
                setFecha(res.message[0].fecha);
                setHora(res.message[0].hora);
                setPrecio(res.message[0].precio);
                setParticipantes(res.message[0].participantesMax);
                
            });

    }, []);

    return (
        <div>
            <h1>Competiciones</h1>
            <p>Nombre: {nombre}</p>
            <p>Competición: {tipo}</p>
            <p>Descripción: {descripcion}</p>
            <p>Lugar: {lugar}</p>
            <p>Ubicacion: {ubicacion}</p>
            <p>Fecha: {fecha}</p>
            <p>Hora: {hora}</p>
            <p>Precio de inscripción: {precio}</p>
            <p>Nº máximo de participantes: {participantes}</p>
        </div>
    );

}

export default Competiciones;