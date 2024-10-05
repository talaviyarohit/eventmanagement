import React, { useEffect, useState } from 'react';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproAsync, editProductsAsync, getProductsAsync } from '../../Services/Actions/addproductAction';
import { Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search ,setSearch] =useState('');
    const { allproducts, isEdit } = useSelector(state => state.admin);
    console.log("Products", allproducts);

    const handleEdit = (id) => {
        console.log("Edit", id);
        dispatch(editProductsAsync(id));
        navigate('/edit');
    };

    const handledelete = (id) => {
        dispatch(deleteproAsync(id))
    }

    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    return (
        <>
                <div className='flex justify-end searchbar'>
                   <Form className='mb-10 w-80 '>
                        <InputGroup>
                            <FormControl onChange={(e) => setSearch(e.target.value)} placeholder='Search Title'/>
                        </InputGroup>
                    </Form>
                   </div>
            <main className='mtc-10'>
                <Container fluid>
                    <Row className='mb-5'>
                        {
                            allproducts && allproducts.length > 0 ? (
                                allproducts.filter((item)=>{
                                    return search.toLowerCase() === ''
                                    ? item
                                    :item.name.toLowerCase().includes(search.toLowerCase())
                                }). map((pro) => {
                                    return (
                                        <div className="col-sm-8 p-2 col-md-6 col-lg-4 col-lg-3" key={pro.id}>
                                            <div className="product-card">
                                                <div className='img1'>
                                                    <img src={pro.image} alt='' className="product-image" />
                                                </div>
                                                <h2 className="product-title">{pro.name}</h2>
                                                <p className="product-price">{pro.price}</p>
                                               
                                                <p className='he-10'>{pro.description}</p>
                                                <div className='d-flex justify-content-center gap-2'>
                                                    <button className="btn btn-primary px-4" onClick={() => handleEdit(pro.id)}>Edit</button>
                                                    <button className='btn btn-danger' onClick={() => handledelete(pro.id)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                                :
                                (
                                    <p>No products available.</p> // Handle empty state
                                )
                        }
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Products;
