import React, {useState, useEffect} from "react";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [header, setHeader] =useState("NavbarContainer")

    const listenScrollEvent = (e) => {
        if(window.scrollY < 73) {
            return setHeader("NavbarContainer")
        }else if (window.scrollY > 70) {
            return setHeader("Navbar-Fixed")
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => 
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

        return (
            <div className={header}>
                <div className="NavbarContent App-Container">
                    <div className="logo">
                        <Link to="/">
                            <h1>ÉBANO MUEBLES</h1>
                        </Link>
                    </div>
                    <nav className="nav">
                        <ul className="navMenu">
                            <Link to="/">
                            <li className="navItem active">
                                Inicio
                            </li>
                            </Link>
                            <Link to="/productos">
                            <li className="navItem dropdown">
                                Productos
                                
                                <div className="navCategories">
                                    <ul>
                                        <Link to="/categoria/escritorios">
                                            <li className="navItem">Escritorios</li>
                                        </Link>
                                        <Link to="/categoria/estanterias">
                                            <li className="navItem">Estanterías</li>
                                        </Link>
                                        <Link to="/categoria/racks">
                                            <li className="navItem">Rack para TV</li>
                                        </Link>
                                        <Link to="/categoria/mesasratonas">
                                            <li className="navItem">Mesa ratona</li>
                                        </Link>
                                        <Link to="/categoria/comedor">
                                            <li className="navItem">Mesa de comedor</li>
                                        </Link>
                                        <Link to="/categoria/sillas">
                                            <li className="navItem">Sillas</li>
                                        </Link>
                                        <Link to="/categoria/sillones">
                                            <li className="navItem">Sillones</li>
                                        </Link>
                                    </ul>
                                </div>
                            </li>
                            </Link>
                            <li className="navItem">
                                Contacto
                            </li>
                        </ul>
                    </nav>
                    <div className="cartWidget">
                        <CartWidget/>
                    </div>   
                </div>        
            </div>
    )
}

export default NavBar;