import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <container>
            <footer className="footer" >
                <div className="container">
                    <span className="text-muted">Cloud Drop &#169; {new Date().getFullYear()}</span>
                </div>
            </footer >
            </container>
        );
    }   
}

export default Footer