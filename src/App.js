import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import Contacto from './Pages/Contacto';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className='App-Container'>
              <NavBar />
              <Routes>
                <Route exact path='/' element={ <Home />} />
                <Route exact path='/productos' element={ <Productos />} />
                <Route exact path='/categoria/:categoryId' element={ <ItemListContainer />} />
                <Route exact path='/item/:itemId' element={ <ItemDetailContainer />} />
                <Route exact path='/contacto' element={ <Contacto /> } />
              </Routes>          
        </div>
      </BrowserRouter>
  );
}

export default App;
