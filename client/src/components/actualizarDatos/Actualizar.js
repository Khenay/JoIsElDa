import React, { useState, useEffect } from "react";

const Actualizar = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevaPassword, setNuevaPassword] = useState("");

    const actualizarDatos = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ actualizarEmail: nuevoEmail, actualizarPassword: nuevaPassword }),
        };

        fetch("actualizar", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                // if (res.status) {
                //     setMessage(res.message);
                //     //localStorage.setItem("idLoggedUser", JSON.stringify(res.id))
                // } else {
                //     setMessage(res.message);
                // }
            })
    }

    //funcion con fetch al endpoint del crud para poner en los botones

    return (
        <div>

            <div className="containerActualizar">
                <div>Historial</div>
                <div className="cardActualizar">
                    <input type='email' placeholder="email"></input>
                    <input type='email' placeholder="nuevo email"></input>
                    <button className="btnActualizar">Actualizar</button>
                    <input placeholder="contraseña"></input>
                    <input placeholder="nueva contraseña"></input>
                    <button className="btnActualizar">Actualizar</button>
                </div>

            </div>

        </div>
    );
}

export default Actualizar;