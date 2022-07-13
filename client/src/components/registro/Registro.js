import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);


const Registro = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const nuevoUsuario = () => {

        if (
            !nameExp.test(name) ||
            !password ||
            !nick ||
            !nameExp.test(lastName) ||
            !emailExp.test(mail)
        ) {
            setMessage("Datos incorrectos");
        } else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    signName: name,
                    signLastName: lastName,
                    signMail: mail,
                    signNich: nick,
                    signPassword: password
                })
            };

            fetch("registro", requestOptions)
                .then((response) => response.json)
                .then((res) => {
                    navigate("/login");
                });
        }

    };

    return (
        <div>
            <div className="container">
                <div className="cardLog">
                    {message}
                    <div className="sign">
                        <input type='text' placeholder='Introduce tu nombre' onChange={(e) => setName(e.target.value)} />
                        <input type='text' placeholder='Introduce tus apellidos' onChange={(e) => setLastName(e.target.value)} />
                        <input type='email' placeholder='Introduce tu email' onChange={(e) => setMail(e.target.value)} />
                        <input type='text' placeholder='Introduce tu nombre de usuario' onChange={(e) => setNick(e.target.value)} />
                        <input type='password' placeholder='Introduce tu contraseña' onChange={(e) => setPassword(e.target.value)} />
                        <button class='btnRegistro' onClick={() => nuevoUsuario()}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro;