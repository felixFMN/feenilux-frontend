import React, { useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';


const CartShop = (props) => {
//console.log(props)

useEffect(()=>{
})
const [cart, setCart] = useState([]);

useEffect(() => {//el props no lee el contenido por eso seteo al carro
if (localStorage.getItem("carrito") && cart.length === 0) {
    setCart(JSON.parse(localStorage.getItem("carrito")));
}
}, []);
const subtotal = ()=>{
  var sum=0;
  for(var i=0;i<cart.length;i++){
      sum+=cart[i].cantidad*cart[i].precio
  }
  return sum;
  
};
console.log("suma: "+subtotal())
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>imagen</th>
          <th>nombre</th>
          <th>cantidad</th>
          <th>precio</th>
          <th>subtotal</th>
        </tr>
      </thead>
      <tbody>
        {
          (props.cartProducto.length=="")?
          <tr>
            <td colSpan={6} style={{textAlign:"center"}}>No hay productos en el carrito</td>
          </tr>
          :
          props.cartProducto.map((c, key) => {
            return(
            <tr id={key}>
              <td>{key+1}</td>
              <td><img src={c.img} /></td>
              <td>{c.name}</td>
              <td>{c.cantidad}</td>
              <td>{c.precio}</td>
              <td>{c.cantidad * c.precio}</td>
            </tr>)
          })
        }
        <tr>
          <td>Total</td>
          <td>S/. {subtotal()}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CartShop;