import React from "react";
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="NavbarContainer">
            <div className="logo">
                <h1>ÉBANO MUEBLES</h1>
            </div>
            <nav className="nav">
                <ul className="navMenu">
                    <li className="navItem active">
                        Inicio
                    </li>
                    <li className="navItem dropdown">
                        Productos
                        <div className="navCategories">
                            <ul>
                                <li className="navItem">Escritorios</li>
                                <li className="navItem">Estanterías</li>
                                <li className="navItem">Rack para TV</li>
                                <li className="navItem">Mesa ratona</li>
                                <li className="navItem">Mesa de comedor</li>
                                <li className="navItem">Sillas</li>
                                <li className="navItem">Sillones</li>
                            </ul>
                        </div>
                    </li>
                    <li className="navItem">
                        Contacto
                    </li>
                </ul>
            </nav>
            <div className="cartWidget">
                <CartWidget/>
            </div>           
        </div>
    )
}

export default NavBar;