import React, { Component } from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cloudImage from '../images/coverPhoto.jpg';
const Styles = styled.div`
    .jumbo {
        background: url(${cloudImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1>Welcome to Cloud Drop</h1>
                        <p>
                            Fully functioning SaaS cloud service that allows you
                            to securely upload your images.
                        </p>
                    </Container>
                </Jumbo>
            </Styles>
        );
    }
}

export default Jumbotron;
