import React from 'react'
import { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, uploadImages } from '../../Services/Actions/addproductAction';
import { useNavigate } from 'react-router';

function HomeFurniture() {
    const { isSubmit } = useSelector(state => state.admin)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [addProducts, setAddProducts] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        shoping: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddProducts({ ...addProducts, [name]: value });
    };

    const handleImages = async (e) => {
        const file = e.target.files[0];

        try {
            const url = await dispatch(uploadImages(file));
            setAddProducts({ ...addProducts, image: url });
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addProducts);

        dispatch(addProductAsync(addProducts));
        setAddProducts({
            name: '',
            description: '',
            price: '',
            discount: '',
            shoping: '',
            category: '',
            image: ''
        });
        navigate('/event')
    };
    return (
        <div>
            <main>
                <Container className='m-0'>
                    <h2 className='bg-warning py-3 ps-2'>Add Birthday Event</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productName" className="mb-3">
                            <Form.Label> Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Birthday Event  name"
                                name="name"
                                value={addProducts.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter  description"
                                name="description"
                                value={addProducts.description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className='d-flex  gap-5'>
                            <Form.Group controlId="productPrice" className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    
                                    name="price"
                                    value={addProducts.price}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="productPrice" className="mb-3">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter Zip"
                                    name="discount"
                                    value={addProducts.discount}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            
                        </div>

                        <Form.Group controlId="productCategory" className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={addProducts.category}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                <option value="furniture">Boy</option>
                                <option value="blanket-pillows">Girls</option>
                                
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="productImage" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleImages}
                            />
                        </Form.Group>

                        <Button variant="primary" className='mt-2' type="submit">
                            Add Event
                        </Button>
                    </Form>
                </Container>
            </main>
        </div>
    )
}
export default HomeFurniture

