import React, { useState, useEffect } from "react";

const Actualizar = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevaPassword, setNuevaPassword] = useState("");

    const [messageEmail, setMessageEmail] = useState("");
    const [messagePass, setMessagePass] = useState("");

    const updateEmail = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emailAntiguo: email, actualizarEmail: nuevoEmail}),
        };

        fetch("actualizarEmail", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                if (res.status) {
                    setMessageEmail(res.message);
                } else {
                    setMessageEmail(res.message);
                }
            })
    }

    const updatePass = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ passwordAntigua:password, actualizarPassword: nuevaPassword }),
        };

        fetch("actualizarPassword", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                if (res.status) {
                    setMessagePass(res.message);
                    //localStorage.setItem("idLoggedUser", JSON.stringify(res.id))
                } else {
                    setMessagePass(res.message);
                }
            });

    };

    //funcion con fetch al endpoint del crud para poner en los botones

    return (
        <div>

            <div className="containerActualizar">
                <div className="cardActualizar">
                    {messageEmail}
                    <input type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='email' placeholder="nuevo email" onChange={(e) => setNuevoEmail(e.target.value)}></input>
                    <button className="btnActualizar" onClick={() => updateEmail()}>Actualizar</button>
                    {messagePass}
                    <input placeholder="contraseña" onChange={(e) => setPassword(e.target.value)}></input>
                    <input placeholder="nueva contraseña" onChange={(e) => setNuevaPassword(e.target.value)}></input>
                    <button className="btnActualizar" onClick={() => updatePass()}>Actualizar</button>
                </div>

            </div>

        </div>
    );
}

export default Actualizar;