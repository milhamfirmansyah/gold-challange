import React, {useEffect,useState} from 'react';
import axios from "axios";
import { Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import './searchbar.css';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {

    //Axios, API, etc
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        getData();
     },[]);
  
     const getData = () => {
        const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}&status=${status}`;
        
        axios
           .get(api)
           .then((res)=>{
              setData(res.data.cars);
           })
           .catch((err)=>console.log(err));
     };
  
     const handleNameChange=(e)=>{
        setName(e.target.value)
     }
  
     const handleCategChange = (e) => {
        setCategory(e.target.value);
      };
  
      const handleStatusChange = (e) => {
        setStatus(e.target.value);
      };

      const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
     };
     
     const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
     };

    const redirect = (id) =>{
        navigate(`/CarDetail/${id}`);
    };

  return (
    <Container>
        <Card id='serCard'>
            <Form id ='serForm'>
                <Row id='serRow'>
                    <Col md={3}>
                        <p>Nama Mobil</p>
                        <Form.Control name="carName" onChange={handleNameChange} />
                    </Col>
                    <Col md={3}>
                        <p>Kategori</p>
                        <Form.Select name="category"  onChange={handleCategChange}>
                            <option value=""></option>
                            <option value="small">2 - 4 orang</option>
                            <option value="medium">4 - 6 orang</option>
                            <option value="large">6 - 8 orang</option>
                        </Form.Select>
                    </Col>
                    <Col md={2}>
                        <p>Harga minimum</p>
                        <Form.Control name='minPrice'/>
                    </Col>
                    <Col md={2}>
                        <p>Harga maximum</p>
                        <Form.Control name='maxPrice'/>
                    </Col>
                    <Col md={2}>
                        <p>Status</p>
                        <Form.Select name="status" defaultValue="status" onChange={handleStatusChange}>
                            <option value=""></option>
                            <option value="true">Sudah disewa</option>
                            <option value="false">Belum disewa</option>
                        </Form.Select>
                    </Col>
                    <Col id='sebtCol' md={1}>
                        <Button variant="custom" onClick={getData}>Cari Mobil</Button>
                    </Col>
                </Row>
            </Form>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {
            data.map((item)=>(
                <Container id='restCont' key={item.id} style={{ width: '100%', maxWidth: '18rem' }}>
                     <Card className='carCards' style={{width:'333 px'}}>
                        <Card.Img variant="top" src={item.image} style={{width:'270 px', height:'160 px'}}/>
                        <Card.Body id='card-body'>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Harga: {item.price}</Card.Text>
                            <Card.Text>Status: {item.status ? "Sudah disewa" : "Belum disewa"}</Card.Text>
                            <Button onClick={()=>redirect(item.id)}variant="custom" disabled={item.status} >Sewa Mobil</Button>
                        </Card.Body>
                    </Card>

                </Container>
            ))
        }
       </div>
    </Container>
  )
}

export default SearchBar