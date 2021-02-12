import { Navbar, NavbarBrand } from "reactstrap";
import Main from './components/MainComponent'; //importar a classe menu
import './App.css';
import {BrowserRouter} from 'react-router-dom';

function App (){
  
  return (
    <BrowserRouter>
    <div>
      <Main /> {/* como chamar a classe importada */}
    </div>
    </BrowserRouter>
  );

}

export default App;
