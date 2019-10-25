import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { Navbar } from 'react-bootstrap';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/login">Login/New</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>

                
        );
    }
}
export default Navigation