import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { CartContextProvider } from './components/Context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Contacto from './Pages/Contacto';
import './App.css';
import Modal from './components/Modal/Modal';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div className='App-Container'>
                <NavBar />
                <Routes>
                  <Route exact path='/' element={ <Home /> } />
                  <Route exact path='/productos' element={ <Productos /> } />
                  <Route exact path='/productos/:categoryId' element={ <Productos /> } />
                  <Route exact path='/item/:itemId' element={ <ItemDetailContainer /> } />
                  <Route exact path='/cart' element = { <Cart /> } />
                  <Route exact path='/checkout' element = { <Checkout />} />
                  <Route exact path='/contacto' element={ <Contacto /> } />
                </Routes>
                <Footer />          
          </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
