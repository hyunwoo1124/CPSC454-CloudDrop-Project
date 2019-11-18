import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
// import styled from 'styled-components';
import Logo from '../images/cloudDropLogo.png';

class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg">
                <Link to={this.props.auth ? '/dashboard' : '/'}>
                    <img
                        src={Logo}
                        width="230"
                        height="35"
                        className="d-inline-block align-top"
                        alt="CloudDrop logo"
                    />
                </Link>
                <Link
                    to="/images"
                    style={{ display: this.props.auth ? 'block' : 'none' }}
                >
                    Upload
                </Link>
                <Link
                    to="/shared"
                    style={{ display: this.props.auth ? 'block' : 'none' }}
                >
                    Shared
                </Link>
                <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            {this.props.auth ? (
                                <a href="/api/logout">Logout</a>
                            ) : (
                                <a href="/auth/google">Login with Google</a>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation;
