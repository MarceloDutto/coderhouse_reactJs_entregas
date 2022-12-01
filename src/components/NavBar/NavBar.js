import React, {useState, useEffect} from "react";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

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
                        <Link to="/" >
                            <h1>ÉBANO MUEBLES</h1>
                        </Link>
                    </div>
                    <nav className="nav">
                        <ul className="navMenu">
                            <NavLink to="/" className={(navActive) =>  navActive.isActive ? 'active' : '' } >
                                <li className="navItem" >
                                    Inicio
                                </li>
                            </NavLink>
                            <NavLink to="/productos" className={(navActive) =>  navActive.isActive ? 'active' : '' } >
                                <li className="navItem dropdown" >
                                    Productos
                                    
                                    <div className="navCategories">
                                        <ul>
                                            <NavLink to="/categoria/escritorios">
                                                <li className="navItemCategory">Escritorios</li>
                                            </NavLink>
                                            <NavLink to="/categoria/estanterias">
                                                <li className="navItemCategory">Estanterías</li>
                                            </NavLink>
                                            <NavLink to="/categoria/racks">
                                                <li className="navItemCategory">Rack para TV</li>
                                            </NavLink>
                                            <NavLink to="/categoria/mesasratonas">
                                                <li className="navItemCategory">Mesas ratonas</li>
                                            </NavLink>
                                            <NavLink to="/categoria/comedor">
                                                <li className="navItemCategory">Mesas de comedor</li>
                                            </NavLink>
                                            <NavLink to="/categoria/sillas">
                                                <li className="navItemCategory">Sillas</li>
                                            </NavLink>
                                            <NavLink to="/categoria/sillones">
                                                <li className="navItemCategory">Sillones</li>
                                            </NavLink>
                                        </ul>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/contacto" className={(navActive) =>  navActive.isActive ? 'active' : '' } >
                                <li className="navItem" >
                                    Contacto
                                </li>
                            </NavLink>
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