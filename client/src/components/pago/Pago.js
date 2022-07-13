import React, {useState, useEffect} from "react";

const Pago = () => {
    return(
        <div>
            <div className="container-pago">
                <div className="card-pago">
                    <div class="titularTarjeta">
                        <label>Introduce tu nombre y apellidos</label>
                        <input id="titTarjeta" placeholder="Nombre y apellidos"/>
                    </div>
                    <div class="numTarjeta">
                        <label>Introduce el número de la tarjeta</label>
                        <input id="numeroTarjeta" placeholder="Debe contener 16 dígitos"/>
                    </div>
                    <div class="caducidad">
                        <label>Fecha de caducidad</label>
                        <input id="cadTarjeta" placeholder="01-01"/>
                    </div>
                    <div class="codigo">
                        <label>CVV</label>
                        <input id="cvv" placeholder="111"/>
                    </div>
                    <div className="boton">
                        <button className="btn">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pago;