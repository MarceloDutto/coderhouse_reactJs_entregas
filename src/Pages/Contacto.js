import React, {useState} from "react";
import contactImage from './contacto.jpg'
import iconPhone from './icon-phone.png'
import iconEmail from './icon-email.png'
import iconLocation from './icon-location.png'
import Loader from "../components/Loader/Loader";

const Contacto = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);

    return (loading ?
            <Loader />
            :
        <div className="contacto-container">
            <div className="contact-image-div">
                <img src={contactImage} className="contact-image" alt="contacto"></img>
                <div className="contact-text">
                    <p>Contáctenos, nuestros agentes están esperando para asesorarlo.</p>
                    <p>También puede comunicarse directamente por Whatsapp para mayor comodidad.</p>
                </div>
            </div>
            <div className="contact-info-container">
                <div className="column">
                    <div className="row">
                        <img src={ iconPhone } className="icon"></img>
                        <h3>+54 9 11 12356578</h3>
                    </div>
                    <div className="row">
                        <img src={ iconEmail } className="icon"></img>
                        <h3>info@ebanomuebles.com.ar</h3>
                    </div>
                    <div className="row">
                        <img src={ iconLocation } className="icon"></img>
                        <h3>Buenos Aires - Argentina</h3>
                    </div> 
                </div>
                <div className="column">
                    <form className="contact-form">
                        <div className="form-row">
                            <label>Nombre</label>
                            <input></input>
                        </div>
                        <div className="form-row">
                            <label>Email</label>
                            <input type="email"></input>
                        </div>
                        <div className="form-row">
                            <label>Teléfono</label>
                            <input></input>
                        </div>
                        <div className="form-row">
                            <label>Mensaje</label>
                            <textarea rows="8"></textarea>
                        </div>
                        <button className="form-button">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto;