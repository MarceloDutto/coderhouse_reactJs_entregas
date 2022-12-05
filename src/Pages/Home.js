import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import './Home.css'



const Home = () => {
    return (
    <div>
        <Hero greeting='Tenemos a su disposicion muebles estandarizados y tambien a medida totalmente personalizados a su necesidad y gusto, contactenos por correo electronico o WhastApp para brindarle el presupuesto que desee.' />
        <ItemListContainer limitted={true} />
        <div className="callToAction">
            <Link to='/productos' >
                <button className="btn-action"> + Ver más </button>
            </Link>
        </div>
    </div>
    )
}

export default Home;