// src/AddProductComponent.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../state/actions';
import { Product } from '../state/actionTypes';
import { Button, Card, Form } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const AddProductComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);

    const handleAddProduct = () => {
        const newProduct: Product = {
            id: 0, // The server will generate a unique ID
            productName,
            price,
        };

        dispatch(addProduct(newProduct));
        setProductName('');
        setPrice(0);
    };

    return (
        <Card>
            <CardHeader>Add Produc</CardHeader>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={productName} onChange={(e) => setProductName(e.target.value)} type="text" placeholder="example" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} type='text' placeholder='0.0$' />
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>{' '}
            </Card.Body>
        </Card>
    );
};

export default AddProductComponent;
