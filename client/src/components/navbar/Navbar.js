import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [nombreUsuario, setNombreUsuario] = useState("");

    useEffect(() => {
        setNombreUsuario(localStorage.getItem('nombre'));
    },[])


    return (
        <div>
            <div className="navBar">
                <header>
                    <Link className="linkGuay" to={"/"}>Guayota</Link>
                </header>
                <nav>
                    {nombreUsuario ? <div><Link className="linkNav" to={"/historico"}>Historico</Link><Link className="linkNav" to={"/cuenta"}>Cuenta</Link></div> : <div><Link className="linkNav" to={"/registro"}>Registro</Link><Link className="linkNav" to={"/login"}>Iniciar sesión</Link></div>}          
                    {/* <Link className="linkNav" to={"#"}>Salir</Link> */}
                </nav>
            </div>
        </div>

    );
}

export default NavBar;