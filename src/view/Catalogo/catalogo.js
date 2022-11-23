import { useParams } from "react-router-dom";
import Logo from '../../img/logo-cable.png'
import Logo2 from '../../img/tomacorriente-logo.png'
import Logo3 from '../../img/logo-lampara.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header"

const catalog=[
    {
        id:1,
        name:'Cables Electricos',
        tipo:"cable",
        img:Logo,
        categoria:1
    },
    {
        id:2,
        name:'Tomacorriente',
        tipo:"cable",
        img:Logo,
        categoria:1
    },
    {
        id:3,
        name:'Lamparas',
        tipo:"lampara",
        img:Logo3,
        categoria:3
    },
    {
        id:4,
        name:'Cables Electricos',
        tipo:"cable",
        img:Logo,
        categoria:1
    },
    {
        id:5,
        name:'Tomacorriente',
        tipo:"tomacorriente",
        img:Logo2,
        categoria:2
    },
    {
        id:6,
        name:'Lamparas',
        tipo:"lampara",
        img:Logo2,
        categoria:2
    },
]

export default function Catalogo(){
    let {tipo}=useParams();
    return(
        <>
        <Header />
        <h1>Categoria de {tipo}</h1>
        <Container>
        <Row xs="auto">
        {catalog.map((value,index)=>{
                if(value.tipo==tipo){
                    return(
                        <Col>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.img} />
      <Card.Body>
        <Card.Title>{value.name}</Card.Title>
        <Button href={'/producto/'+value.id}>
            Ver Detalle
        </Button>
        
      </Card.Body>
    </Card>
    </Col>
                    )
                }
            })}
            </Row>
            </Container>
        <Footer />
        </>
    );
}