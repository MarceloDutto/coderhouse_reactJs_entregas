import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className='App-Container'>
      
        <header>
          <NavBar />
        </header>
      
        <div>
          <ItemListContainer greeting='Tenemos a su disposicion muebles estandarizados y tambien a medida totalmente personalizados a su necesidad y gusto, contactenos por correo electronico o WhastApp para brindarle el presupuesto que desee.'/>
        </div>

    </div>
  );
}

export default App;
