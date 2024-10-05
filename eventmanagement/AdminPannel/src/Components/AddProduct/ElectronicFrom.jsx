import React from 'react'
import { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, uploadImages } from '../../Services/Actions/addproductAction';
import { useNavigate } from 'react-router';

function ElectronicFrom() {
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

        console.log("updatedFormData",addProducts);
        
        setTimeout(()=>{
            navigate('/event')
        },3000)
        
    };
    return (
        <div>
            <main>
                <Container className='m-0'>
                    <h2 className='bg-warning py-3 ps-2'>Add Event</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productName" className="mb-3">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Event Name"
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
                                placeholder="Enter Event Description"
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
                                placeholder="Enter product price"
                                name="price"
                                value={addProducts.price}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productPrice" className="mb-3">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Zip Code"
                                name="discount"
                                value={addProducts.discount}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        
                    </div>
                        

                        {/* <Form.Group controlId="productCategory" className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"  
                                value={addProducts.category}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Leptop-Accessories">Leptop & Accessories</option>
                                <option value="LED-Tv">LED Tv</option>
                            </Form.Control>
                        </Form.Group> */}

                        <Form.Group controlId="productImage" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleImages}
                            />
                        </Form.Group>
                        <span>wait few second</span>
                        <br/>

                        <Button variant="primary" className='mt-2' type="submit">
                            Add Event
                        </Button>
                    </Form>
                </Container>
            </main>
        </div>
    )
}
export default ElectronicFrom

