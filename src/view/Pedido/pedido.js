import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Producto(){
    useEffect(()=>{
    })
    const [pedido, setPedido] = useState([]);

    useEffect(() => {
    if (localStorage.getItem("pedido") && pedido.length === 0) {
        setPedido(JSON.parse(localStorage.getItem("pedido")));
    }
    }, []);
    return(
        <>
        <Header />
        <h1>Mis Pedidos ({pedido.length})</h1>
        <Footer />
        </>
    )
}