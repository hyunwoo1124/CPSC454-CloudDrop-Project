import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../images/cloudDropLogo.png';

const Styles = styled.div `
    .navbar{
        background-color: #ffffff;
    }
    
    .navbar-brand, .navbar-nav .nav-link {
        color: #008AFE;

        &:hover{
            color: black;
        }
    }
`;


class Navigation extends Component {
    render() {
        return (
            
            <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="230"
                        height="35"
                        className="d-inline-block align-top"
                        alt ="CloudDrop logo"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-Navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/createlogin">Create Account</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/dashboard">Dashboard</Nav.Link></Nav.Item>

    
    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>

                
        );
    }
}
export default Navigation