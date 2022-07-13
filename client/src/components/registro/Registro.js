import React, { useState, useEffect } from "react";

const Registro = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const sendData = () => {

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

        fetch("register", requestOptions)
            .then((response) => response.json)
            .then((res) => {
                if (res.status) {
                    setMessage(res.message);
                } else {
                    setMessage(res.message);
                }
            })


    };


    return (
        <div>
            <div className="container">
                <div className="cardLog">
                    <div className="sign">
                        <input type='text' placeholder='Introduce tu nombre' onChange={(e) => setName(e.target.value)} />
                        <input type='text' placeholder='Introduce tus apellidos' onChange={(e) => setLastName(e.target.value)} />
                        <input type='mail' placeholder='Introduce tu email' onChange={(e) => setMail(e.target.value)} />
                        <input type='text' placeholder='Introduce tu nombre de usuario' onChange={(e) => setNick(e.target.value)} />
                        <input type='password' placeholder='Introduce tu contraseña' onChange={(e) => setPassword(e.target.value)} />
                        <button class='btn' onClick={() => sendData()}>Registrarse</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro;