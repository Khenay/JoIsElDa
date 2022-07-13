import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginNick: nick, loginPassword: password }),
    };

    fetch("login", requestOptions)
        .then((response) => response.json())
        .then((res) => {
            if (res.status) {
                setMessage(res.message);
                //localStorage.setItem("idLoggedUser", JSON.stringify(res.id))
            } else {
                setMessage(res.message);
            }
        })

    return (
        <div>
            <div className='container'>
                <div className='cardLog'>
                    <div className='logIn'>
                        <input type='email' placeholder='email' onChange={(e) => setNick(e.target.value)} />
                        <input type='password' placeholder='contraseña' onChange={(e) => setPassword(e.target.value)} />
                        <button class='btn'>Iniciar sesión</button>
                        <Link className="linkNav linkLog" to={"/registro"}>Aún no estás registrado? <br></br>Pincha aquí</Link>
                        <Link className="linkNav linkLog" to={"/registro"}>Olvidé Contraseña</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;