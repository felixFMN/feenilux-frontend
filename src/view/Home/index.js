import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from "react-router-dom";
import Logo from '../../img/logo-cable.png'
import Logo2 from '../../img/tomacorriente-logo.png'
import Logo3 from '../../img/logo-lampara.png'

const prodEj=[
    {
        id:1,
        name:'Cables Electricos',
        tipo:"cable",
        img:Logo,
    },
    {
        id:2,
        name:'Tomacorriente',
        tipo:"tomacorriente",
        img:Logo2,
    },
    {
        id:3,
        name:'Lamparas',
        tipo:"lampara",
        img:Logo3,
    },
]


export default function Home(){
    return(
        <>
        <Header />
        <Banner />
        <h3 style={{margin:'20px'}}>Categorias</h3>
            {prodEj.map((value,index)=>{
                    return(
                        <Container style={{margin:'0px'}}>
                            <Row className="align-items-center" style={{background:"#F44E3B",padding:"10px",margin:'20px'}}>
                            <Col sm={6}>
                                <div key={value.id} >
                                    {
                                        /**
                                         * <Link to={'/catalogo/'+value.tipo}>
                                        <img src={value.img} alt={value.name} className="d-block w-100"></img>
                                    </Link>
                                         */
                                    }
                                    
                                    <Figure>
                                    <Figure.Image
                                        width={500}
                                        height={500}
                                        alt="171x180"
                                        src={value.img}
                                    />
                                    </Figure>
                                    <p>
                                        {value.name}
                                    </p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div key={value.id}>
                                    <img src={value.img} alt={value.name} className="d-block w-60"></img>
                                    <p>
                                        {value.name}
                                    </p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div key={value.id}>
                                    <img src={value.img} alt={value.name} className="d-block w-60"></img>
                                    <p>
                                        {value.name}
                                    </p>
                                </div>
                            </Col>
                            </Row>
                        </Container>
                    );
            })}
        <Footer />
        </>
    );
}