import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navBar">
                <header>
                    <h2>Guayota</h2>
                </header>
                <nav>
                    <Link className="linkNav" to={"#"}>Registro</Link>
                    <Link className="linkNav" to={"/login"}>Crear cuenta</Link>
                    {/* <Link className="linkNav" to={"#"}>Salir</Link> */}
                </nav>
            </div>
        </div>

    );
}

export default NavBar;