import React from "react";
import { Link } from "react-router-dom";
import pagoImg from './mediosDePago.png';
import iconPhone from '../../Pages/icon-phone.png';
import iconEmail from '../../Pages/icon-email.png'
import iconLocation from '../../Pages/icon-location.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-title">Navegación</h3>
                    <Link to="/">
                        <p className="footer-item">Home</p>
                    </Link>
                    <Link to="/productos">
                        <p className="footer-item">Productos</p>
                    </Link>
                    <Link to="/contacto">
                        <p className="footer-item">Contacto</p>
                    </Link>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Medios de pago</h3>
                    <img src={pagoImg} alt="medios de pago" className="medios-img"></img>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">Contactanos</h3>
                    <div className="footer-contact">
                        <img src={ iconPhone } className="icon"></img>
                        <p className="footer-item">+54 9 11 12356578</p>
                    </div>
                    <div className="footer-contact">
                        <img src={ iconEmail } className="icon"></img>
                        <p className="footer-item">info@ebanomuebles.com.ar</p>
                    </div>
                    <div className="footer-contact">
                        <img src={ iconLocation } className="icon"></img>
                        <p className="footer-item">Buenos Aires - Argentina</p>
                    </div> 
                </div>
            </div>
        </div>
    )

}

export default Footer;