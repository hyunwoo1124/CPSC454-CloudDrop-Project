import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../images/cloudDropLogo.png';

const StyledLink = styled(Link)`
    margin: 0px 10px;
`;

class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg" style={{ borderBottom: 'solid #e0e0e0 2px' }}>
                <Link to={this.props.auth ? '/dashboard' : '/'}>
                    <img
                        src={Logo}
                        width="240"
                        height="60"
                        className="d-inline-block align-top"
                        alt="CloudDrop logo"
                    />
                </Link>
                <StyledLink
                    to="/images"
                    style={{ display: this.props.auth ? 'block' : 'none' }}
                >
                    Upload
                </StyledLink>
                <StyledLink
                    to="/shared"
                    style={{ display: this.props.auth ? 'block' : 'none' }}
                >
                    Shared
                </StyledLink>
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
