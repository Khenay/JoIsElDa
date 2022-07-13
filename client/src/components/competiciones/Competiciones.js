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

    const [tipoCiclismo, setTipoCiclismo] = useState("");
    const [nombreCiclismo, setNombreCiclismo] = useState("");
    const [descripcionCiclismo, setDescripcionCiclismo] = useState("");
    const [lugarCiclismo, setLugarCiclismo] = useState("");
    const [ubicacionCiclismo, setubicacionCiclismo] = useState("");
    const [fechaCiclismo, setFechaCiclismo] = useState("");
    const [horaCiclismo, setHoraCiclismo] = useState("");
    const [precioCiclismo, setPrecioCiclismo] = useState("");
    const [participantesCiclismo, setParticipantesCiclismo] = useState("");

    const [tipoTriatlon, setTipoTriatlon] = useState("");
    const [nombreTriatlon, setNombreTriatlon] = useState("");
    const [descripcionTriatlon, setDescripcionTriatlon] = useState("");
    const [lugarTriatlon, setLugarTriatlon] = useState("");
    const [ubicacionTriatlon, setubicacionTriatlon] = useState("");
    const [fechaTriatlon, setFechaTriatlon] = useState("");
    const [horaTriatlon, setHoraTriatlon] = useState("");
    const [precioTriatlon, setPrecioTriatlon] = useState("");
    const [participantesTriatlon, setParticipantesTriatlon] = useState("");


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

                setNombreCiclismo(res.message[1].nombre);
                setTipoCiclismo(res.message[1].tipo);
                setDescripcionCiclismo(res.message[1].descripcion);
                setLugarCiclismo(res.message[1].lugar);
                setubicacionCiclismo(res.message[1].ubicacion);
                setFechaCiclismo(res.message[1].fecha);
                setHoraCiclismo(res.message[1].hora);
                setPrecioCiclismo(res.message[1].precio);
                setParticipantesCiclismo(res.message[1].participantesMax);

                setNombreTriatlon(res.message[2].nombre);
                setTipoTriatlon(res.message[2].tipo);
                setDescripcionTriatlon(res.message[2].descripcion);
                setLugarTriatlon(res.message[2].lugar);
                setubicacionTriatlon(res.message[2].ubicacion);
                setFechaTriatlon(res.message[2].fecha);
                setHoraTriatlon(res.message[2].hora);
                setPrecioTriatlon(res.message[2].precio);
                setParticipantesTriatlon(res.message[2].participantesMax);
            });

    }, []);

    return (
        <div>
            <h1>Competiciones</h1>
            <div className="competiciones">


                <div className="containerCompeticiones">
                    <div>
                        <h2 className="nombreCompeticion">{nombre}</h2>
                        <p>{descripcion}</p>
                        <p>Lugar: {lugar}, {ubicacion}</p>
                    </div>
                    <p>Fecha: {fecha}</p>
                    <p>Hora: {hora}h</p>
                    <p>Precio de inscripción: {precio}</p>
                    <p>Nº máximo de participantes: {participantes}</p>
                    <button className="btnInscripcion">Inscribete</button>
                </div>

                <div className="containerCompeticiones">
                    <div>
                        <h2 className="nombreCompeticion">{nombreCiclismo}</h2>
                        <p>{descripcionCiclismo}</p>
                        <p>Lugar: {lugarCiclismo}, {ubicacionCiclismo}</p>
                    </div>
                    <p>Fecha: {fechaCiclismo}</p>
                    <p>Hora: {horaCiclismo}h</p>
                    <p>Precio de inscripción: {precioCiclismo}</p>
                    <p>Nº máximo de participantes: {participantesCiclismo}</p>
                    <button className="btnInscripcion">Inscribete</button>
                </div>

                <div className="containerCompeticiones">
                    <div>
                        <h2 className="nombreCompeticion">{nombreTriatlon}</h2>
                        <p>{descripcionTriatlon}</p>
                        <p>Lugar: {lugarTriatlon}, {ubicacionTriatlon}</p>
                    </div>
                    <p>Fecha: {fechaTriatlon}</p>
                    <p>Hora: {horaTriatlon}h</p>
                    <p>Precio de inscripción: {precioTriatlon}</p>
                    <p>Nº máximo de participantes: {participantesTriatlon}</p>
                    <button className="btnInscripcion">Inscribete</button>
                </div>
            </div>
        </div>
    );

}

export default Competiciones;