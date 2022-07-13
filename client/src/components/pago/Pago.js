import React, { useState, useEffect } from "react";

const Pago = () => {

    const [data, setData] = useState('');
    const [message, setMessage] = useState('');
    
    const [titTarjeta, setTitular] = useState("");
    const [numeroTarj, setNumero] = useState("");
    const [cadTarjeta, setCaducidad] = useState("");
    const [cvv, setCvv] = useState("");

    const titularTarjeta = (/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/);
    const numeroTarjeta = (/^[0-9]{16}$/);
    const caducidadTarjeta = (/^[0-9]{2}-[0-9]{2}$/);
    const cvvTarjeta = (/^[0-9]{3}$/);



    useEffect(() => {
        fetch("id")
            .then((response) => response.json())
            .then((res) => {
                setData(res.result);
            });

    }, []);

    const pagar = () => {
        if (!titularTarjeta.test(titTarjeta) || !numeroTarjeta.test(numeroTarj) ||
            !caducidadTarjeta.test(cadTarjeta) || !cvvTarjeta.test(cvv)) {
            setMessage(<h5>Datos incorrectos</h5>)
        } else {
            setMessage(<h5>Tu pago se ha realizado correctamente. Te esperamos en una de las mejores competiciones del mundo!</h5>)
        }
    };



    return (
        <div>
            <div className="container-pago">
                {data ? data.map((e, i) =>
                    <div key={i}>
                        <p>Te vas a inscribir en {e.nombre} por un precio de {e.precio}.
                            Te esperamos en {e.lugar}, {e.ubicacion},
                            el día {e.fecha} a las {e.hora}h</p>
                    </div>) : ""}
                {message}
                <div className="card-pago">
                    <div class="titularTarjeta">
                        <label>Introduce tu nombre y apellidos</label>
                        <input id="titTarjeta" placeholder="Nombre y apellidos" onChange={(e) => setTitular(e.target.value)} />
                    </div>
                    <div class="numTarjeta">
                        <label>Introduce el número de la tarjeta</label>
                        <input id="numeroTarjeta" placeholder="Debe contener 16 dígitos" onChange={(e) => setNumero(e.target.value)} />
                    </div>
                    <div class="caducidad">
                        <label>Fecha de caducidad</label>
                        <input id="cadTarjeta" placeholder="01-01" onChange={(e) => setCaducidad(e.target.value)}/>
                    </div>
                    <div class="codigo">
                        <label>CVV</label>
                        <input id="cvv" placeholder="111" onChange={(e) => setCvv(e.target.value)}/>
                    </div>
                    <div className="boton">
                        <button className="btnPago" onClick={() => pagar()}>pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pago;