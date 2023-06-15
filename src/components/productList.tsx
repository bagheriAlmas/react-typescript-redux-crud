
import { useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import UpdateProductComponent from './updateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, deleteProduct, getProductById } from '../state/actions';
import { ProductState } from '../state/actionTypes';

export default function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector((state: ProductState) => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>

                    <Accordion>
                        <Accordion.Item eventKey={product.id.toString()}>
                            <Accordion.Header>

                                <div className='row d-flex justify-align-content-between w-100'>
                                    <div className='col'>
                                        {product.id}
                                    </div>
                                    <div className='col'>
                                        {product.productName}
                                    </div>
                                    <div className='col'>
                                        {product.price}$
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                {
                                    <UpdateProductComponent product={product} />
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            ))}
        </div>
    );
}