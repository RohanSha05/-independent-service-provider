import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import '../Service/Service.css'

const Service = (props) => {
    const { image, name, price, description } = props.services;
    console.log(props)
    return (
        <div className='container  col-lg-3 col-sm-12'>
            <Card className='card-body'>
                <Card.Body>
                    <Card.Img className='' variant="top" src={image} style={{ width: 300 }} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p className='fw-bolder'>Cost: ${price}</p>
                    <div className='d-flex justify-content-center'>
                        <Button> <Link className='appoint-link' to="/checkout" element={<Checkout></Checkout>}>Appoint Now</Link> </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;