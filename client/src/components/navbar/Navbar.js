import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [nombreUsuario, setNombreUsuario] = useState("");
    // const navigate = useNavigate("")

    useEffect(() => {
        setNombreUsuario(localStorage.getItem('nombre'));
    },[])

    function borrar () {
        localStorage.removeItem("nombre")
        window.location.assign("/")

    }

    return (
        <div>
            <div className="navBar">
                <header>
                    <Link className="linkGuay" to={"/"}>Guayota</Link>
                </header>
                <nav>
                    {nombreUsuario ? <div className="navUser"><Link className="linkNav" to={"/historico"}>Historico</Link>
                        <Link className="linkNav" to={"/cuenta"}>Cuenta</Link>
                            {/* <button id="boton" onClick={erase()}>Salir</button> */}
                            <button className="btnUser" onClick={() => {borrar()}}>Salir</button>
                                </div> : <div className="navUser">
                                    <Link className="linkNav" to={"/registro"}>Registro</Link>
                                        <Link className="linkNav" to={"/login"}>Iniciar sesión</Link></div>}          
                    {/* <Link className="linkNav" to={"#"}>Salir</Link> */}
                </nav>
            </div>
        </div>

    );
}

export default NavBar;