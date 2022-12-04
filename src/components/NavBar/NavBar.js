import React, {useState, useEffect} from "react";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [headerClass, setHeaderClass] =useState("navbarContainer")

    const listenScrollEvent = (e) => {
        if(window.scrollY < 73) {
            return setHeaderClass("navbarContainer")
        }else if (window.scrollY > 70) {
            return setHeaderClass("navbar-fixed")
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => 
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


        return (
            <div className={headerClass}>
                <div className="navbarContent App-Container">
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
                                            <NavLink to="productos/escritorios">
                                                <li className="navItemCategory">Escritorios</li>
                                            </NavLink>
                                            <NavLink to="/productos/estanterias">
                                                <li className="navItemCategory">Estanterías</li>
                                            </NavLink>
                                            <NavLink to="/productos/racks">
                                                <li className="navItemCategory">Rack para TV</li>
                                            </NavLink>
                                            <NavLink to="/productos/mesasratonas">
                                                <li className="navItemCategory">Mesas ratonas</li>
                                            </NavLink>
                                            <NavLink to="/productos/comedor">
                                                <li className="navItemCategory">Mesas de comedor</li>
                                            </NavLink>
                                            <NavLink to="/productos/sillas">
                                                <li className="navItemCategory">Sillas</li>
                                            </NavLink>
                                            <NavLink to="/productos/sillones">
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
                        <Link to="/cart" >
                            <CartWidget/>
                        </Link>
                    </div>
                       
                </div>        
            </div>
    )
}

export default NavBar;