import React from 'react';
import { Card } from 'react-bootstrap';
import checkout from '../Checkout/checkout.jpg'

const Checkout = () => {
    return (
        <div>
            <h1 className='text-center'>Here is your checkout</h1>
            <div className='container  col-lg-3 col-sm-12'>
                <Card className='card-body'>
                    <Card.Body>
                        <Card.Img className='' variant="top" src={"https://i.ibb.co/mXPkvKs/package1.jpg"} style={{ width: 300 }} />
                        <Card.Title>Replacement of missing teeth</Card.Title>
                        <Card.Text>
                            "Ental implants are one of the most common methods of tooth replacement.Dental implants are a very reliable type of tooth replacement that both looks and feels like a real tooth.
                        </Card.Text>
                        <p className='fw-bolder'>Cost: $420</p>
                        <div className='d-flex justify-content-center'>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Checkout;