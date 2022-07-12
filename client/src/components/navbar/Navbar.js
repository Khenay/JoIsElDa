import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navBar">
                <header>
                    <Link className="linkGuay" to={"/"}>Guayota</Link>
                </header>
                <nav>
                    <Link className="linkNav" to={"/registro"}>Registro</Link>
                    <Link className="linkNav" to={"/login"}>Crear cuenta</Link>
                    {/* <Link className="linkNav" to={"#"}>Salir</Link> */}
                </nav>
            </div>
        </div>

    );
}

export default NavBar;