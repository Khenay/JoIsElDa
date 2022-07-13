import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Competiciones = () => {

    const [data, setData] = useState('');
    const [id, setId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("competiciones")
            .then((response) => response.json())
            .then((res) => {
                setData(res.message);
            });

    }, []);

    const getBtnId = (e) => {
    //     console.log(id)
    //     setId(e);
    //    // console.log(id)

    //     const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ id: id }),
    //     };

        fetch("id")
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                navigate("/pago")
            });
    }

    return (
        <div>
            <h1>Competiciones</h1>
            <div className="competiciones">
                {data ? data.map((e, i) =>
                    <div key={i} className="containerCompeticiones">
                        <div>
                            <h2 className="nombreCompeticion">{e.nombre}</h2>
                            <p>{e.descripcion}</p>
                            <p>Lugar: {e.lugar}, {e.ubicacion}</p>
                        </div>
                        <p>Fecha: {e.fecha}</p>
                        <p>Hora: {e.hora}h</p>
                        <p>Precio de inscripción: {e.precio}</p>
                        <p>Nº máximo de participantes: {e.participantes}</p>
                        <button id={e._id} className="btnInscripcion" onClick={(e) => getBtnId(e.target.id)}>Inscribete</button>
                    </div>) : ""}
            </div>
        </div>
    );

}

export default Competiciones;