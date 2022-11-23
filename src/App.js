import Home from "./view/Home/index";
import Catalogo from "./view/Catalogo/catalogo";
import Producto from "./view/Producto/producto";
import {Routes,Route} from "react-router-dom"
import Carrito from './view/Carrito/carrito';
import Pedido from './view/Pedido/pedido';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogo/:tipo' element={<Catalogo />} />
      <Route path='/producto/:id' element={<Producto />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/pedido' element={<Pedido />} />

    </Routes>
  );
}

export default App;
