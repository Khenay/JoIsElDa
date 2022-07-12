import React, { useState, useEffect } from "react";

const Competiciones = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("competiciones")
            .then((response) => response.json())
            .then((res) => {
                //console.log('res: ', res);
                // if (res.status) {
                setMessage(res.message[0].lugar);
                console.log(res.message[0].lugar)
                // } else {
                //     console.log('res: ', res.message);
                //     setMessage(res.message);
                // };
            });

    }, []);

    return (
        <div>
            <h1>Competiciones</h1>
            <p>Lugar: {message}</p>
        </div>
    );

}

export default Competiciones;