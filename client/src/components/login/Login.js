import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../navbar/Navbar'
// import PaginatedItems from '../paginado/Paginado'


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const login = () => {


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, loginPassword: password }),
        };

        fetch("login", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                if (res.message == 'Usuario o contraseña incorrectos') {
                    setMessage(res.message);
                } else {
                    navigate("/historico")
                }

                //localStorage.setItem("idLoggedUser", JSON.stringify(res.id))

            })


    };




    return (

        <div>
            <div className='container'>
                <div className='cardLog'>
                    <div className='logIn'>
                        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='contraseña' onChange={(e) => setPassword(e.target.value)} />
                        <button class='btn' onClick={() => login()}>Iniciar sesión</button>
                        {message ? <p id="mensajeMal">{message}</p> : ''}
                        <Link className="linkNav linkLog" to={"/registro"}>Aún no estás registrado? <br></br>Pincha aquí</Link>
                        <Link className="linkNav linkLog" to={"/registro"}>Olvidé Contraseña</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;