import React from "react";
import Hero from "../components/Hero/Hero";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Home = () => {
    return (
    <div>
        <Hero greeting='Tenemos a su disposicion muebles estandarizados y tambien a medida totalmente personalizados a su necesidad y gusto, contactenos por correo electronico o WhastApp para brindarle el presupuesto que desee.' />
        <ItemListContainer />
    </div>
    )
}

export default Home;