import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './addproduct.css'
import { Carousel, Container, Row } from 'react-bootstrap';
import cerousel_one from '../../assets/images/1st-imgjpeg.jpeg'
import cerousel_two from '../../assets/images/2nd-img.jpg'
import cerousel_three from '../../assets/images/2st-img.jpeg'



function AddProduct() {
    return (
        <>
            <main>
                <Container className='m-0'>
                    <div className="addform-header">
                        <div className="col-3">
                            <DropdownButton id="dropdown-basic-button" title="Select Event">
                                <Dropdown.Item href="/electronic">Weddings</Dropdown.Item>
                                <Dropdown.Item href="/fashoin">Product Launches</Dropdown.Item>
                                <Dropdown.Item href="furniture">Birthday Parties</Dropdown.Item>
                                <Dropdown.Item href="/grocery">Others</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </Container>
                <h2 className='text-center'>The Best Event</h2>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <img src={cerousel_one} alt={cerousel_one} className='carousel-img' />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cerousel_two} alt={cerousel_two} className='carousel-img' />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={cerousel_three} alt={cerousel_three} className='carousel-img' />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default AddProduct;
