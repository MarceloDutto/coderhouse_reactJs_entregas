import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
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
                <Route exact path='/productos' element={ <ItemListContainer />} />
                <Route exact path='/categoria/:id' element={ <ItemListContainer />} />
                <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
              </Routes>          
        </div>
      </BrowserRouter>
  );
}

export default App;
