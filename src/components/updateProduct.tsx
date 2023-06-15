// src/UpdateProductComponent.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../state/actions';
import { Product } from '../state/actionTypes';
import { Button, Card, Form } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {deleteProduct} from '../state/actions';

interface UpdateProductComponentProps {
  product: Product;
}

const UpdateProductComponent: React.FC<UpdateProductComponentProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState(product.productName);
  const [price, setPrice] = useState(product.price);

  const handleUpdateProduct = () => {
    const updatedProduct: Product = {
      ...product,
      productName,
      price,
    };
    dispatch(updateProduct(updatedProduct));
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>      
      <Card>
            <CardHeader>Update Product</CardHeader>
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
                <Button variant="primary" onClick={handleUpdateProduct} >Update Product</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>{' '}

            </Card.Body>
        </Card>
      
    </div>
  );
};

export default UpdateProductComponent;
