import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from '../../img/logo-cable.png'
import Logo2 from '../../img/tomacorriente-logo.png'
import Logo3 from '../../img/logo-lampara.png'
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';



const catalog=[
    {
        id:1,
        name:'Cables Electricos',
        tipo:"cable",
        img:Logo,
        categoria:1,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
    {
        id:2,
        name:'Tomacorriente',
        tipo:"cable",
        img:Logo,
        categoria:1,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
    {
        id:3,
        name:'Lamparas',
        tipo:"lampara",
        img:Logo3,
        categoria:3,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
    {
        id:4,
        name:'Cables Electricos',
        tipo:"cable",
        img:Logo,
        categoria:1,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
    {
        id:5,
        name:'Tomacorriente',
        tipo:"tomacorriente",
        img:Logo2,
        categoria:2,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
    {
        id:6,
        name:'Lamparas',
        tipo:"lampara",
        img:Logo2,
        categoria:2,
        stock:10,
        descripcion:"Los cables que se usan para conducir electricidad se fabrican generalmente de cobre,debido a la excelente conductividad de este material, o de aluminio que aunque posee menor conductividad es más ligero para la misma capacidad y típicamente más económico que el cobre."
    },
]

export default function Producto(){
    let {id}=useParams();
    useEffect(()=>{
    })
    const [cartProduct, setCardProduct] = useState([]);

    useEffect(() => {
    if (localStorage.getItem("carrito") && cartProduct.length === 0) {
        setCardProduct(JSON.parse(localStorage.getItem("carrito")));
    }
    }, []);

    const onHandleClick=(aimg,aname,acantidad,aprecio)=>{
    const arrayCarrito = localStorage.getItem("carrito")
        ? JSON.parse(localStorage.getItem("carrito"))
        : [];
    let objcarrito={
        img:aimg,
        name:aname,
        cantidad:acantidad,
        precio:aprecio
    }
    arrayCarrito.push(objcarrito);
    console.log(objcarrito)
    alert("producto agregado al carrito")
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    window.location.reload();
    }
    return(
        <>
        <Header />
        <h1>Detalles del Producto</h1>
        {
            catalog.map((value,index)=>{
                if(value.id==id){
                return(
                <>
                <Figure>
                <Figure.Image
                    width={500}
                    height={500}
                    alt="171x180"
                    src={value.img}
                />
                </Figure>
                <h3>{value.descripcion}</h3>
                <h3>stock: {value.stock}</h3>
                <Button onClick={()=>onHandleClick(value.img,value.name,value.stock,value.stock)} >Comprar</Button>
                </>
                )
                }
            })
        }

        <Footer />
        </>
    );
}
