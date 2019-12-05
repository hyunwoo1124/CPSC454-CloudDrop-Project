import React, { Component } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import laptopImage from '../images/laptopImage.jpg';
import blueSkys from '../images/blueSkys.jpeg';
import cloudStorage from '../images/cloudStorage.jpg';

class CarouselImage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={laptopImage}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Run in any platform</h3>
                                <p>
                                    You can use CloudDrop anywhere in the world!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={blueSkys}
                                alt="Second Slide"
                            />

                            <Carousel.Caption>
                                <h3>Store your data with us, CloudDrop</h3>
                                <p>We bring the storage to you!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cloudStorage}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Your storage is safe with us!</h3>
                                <p>
                                    Borrowing AWS technologies with EC2
                                    instances!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        );
    }
}
export default CarouselImage;
