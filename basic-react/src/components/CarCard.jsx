import React, {useEffect,useState} from 'react'
import { Card, Button } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import axios from "axios";


const CarCard = () => {
  const [data, setData] = useState({});
  let {id} = useParams();

  const getCarData = () => {

    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((res)=>{
        setData(res.data);
        console.log(res);
      })
      .catch((err)=>console.log(err));

  };

  useEffect(()=>{
    getCarData();
  },[]);

  return (
    <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src={data?.image} style={{width:'270 px', height:'160 px'}}/>
            <Card.Body>
                <Card.Title>{data?.name}</Card.Title>
                <Card.Text>Harga: {data?.price}</Card.Text>
                <Card.Text>Status: {data?.status ? "Sudah disewa" : "Belum disewa"}</Card.Text>
                <Button variant="primary">Sewa Mobil</Button>
            </Card.Body>
    </Card>
  )
}

export default CarCard