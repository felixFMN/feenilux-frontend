import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartShop from "../../components/CartShop";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Carrito(){
    useEffect(()=>{
    })
    const [cartProduct, setCardProduct] = useState([]);
    const [pedidoProducto, setPedidoProducto] = useState([]);
    const [pedidoDetalle, setPedidoDetalle] = useState([]);
    const [ejemplo,setEjemplo]=useState([]);
    
    useEffect(() => {
        if(localStorage.getItem('ejemplo') && ejemplo.length === 0) {
            setEjemplo(JSON.parse(localStorage.getItem('carrito')));
        }
    },[]);
    useEffect(() => {
        if(localStorage.getItem('pedidodetalle') && pedidoDetalle.length === 0) {
            setPedidoDetalle(JSON.parse(localStorage.getItem('pedidodetalle')));
        }
    },[]);
    useEffect(() => {
        if(localStorage.getItem('carrito') && cartProduct.length === 0) {
            setCardProduct(JSON.parse(localStorage.getItem('carrito')));
        }
    },[]);
    useEffect(() => {
        if(localStorage.getItem('pedido') && pedidoProducto.length === 0) {
            setPedidoProducto(JSON.parse(localStorage.getItem('pedido')));
        }
    },[]);

    
let eje={
    ideje:1,
    deta:{}
}
eje.deta=localStorage.getItem("carrito")

console.log("detalles:"+ejemplo+" .... "+JSON.stringify(eje))

    /////////////////////////////7
    const subtotal = ()=>{
        var sum=0;
        for(var i=0;i<cartProduct.length;i++){
            sum+=cartProduct[i].cantidad*cartProduct[i].precio
        }
        return sum;
      };
    ////////////////7
        const onHandleClick=()=>{
            const arraypedido = localStorage.getItem("pedido")
            const arraypedidodetalle=localStorage.getItem("pedidodetalle")
            let totalprecio=subtotal()
        let pedidoA={
            direccion:document.getElementById("direccion").value,
            persona:document.getElementById("persona").value,
            total:totalprecio,
        }
        let pedidoD={
            idpedido:pedidoProducto.length,
            detallecarrito:{}
        }
        pedidoD.detallecarrito=localStorage.getItem("carrito")
        arraypedido.push(pedidoA);
        arraypedidodetalle.push(pedidoD);
        console.log(pedidoA)
        alert("se registro el pedido")
        localStorage.setItem("pedido", JSON.stringify(arraypedido));
        localStorage.setItem("pedidodetalle", JSON.stringify(arraypedidodetalle));
        localStorage.removeItem("carrito");
        window.location.reload();
        }

    return(
        <>
        <Header carro={cartProduct.length} />
        {
            (cartProduct.length==[])?
            <h1>Carrito vacio</h1>
            :
            <h1>carrito {cartProduct.length}</h1>
        }
        <CartShop cartProducto={cartProduct}/>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>DIRECCION</Form.Label>
                <Form.Control type="direccion" id="direccion" placeholder="Direccion" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>PERSONA</Form.Label>
                <Form.Control type="persona" id="persona" placeholder="Nombre de la Persona" />
            </Form.Group>
        </Form>
        <Button onClick={()=>onHandleClick()} >Comprar</Button>
        <Footer />
        </>
    )
}