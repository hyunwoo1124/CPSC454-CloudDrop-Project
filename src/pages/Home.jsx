import React, { Component } from 'react';


import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Carousel from '../components/Carousel.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron
                    title="Welcome to CloudDrop!"
                    subtitle="Powered by our cloud computers to allow you to securely upload/download files!"
                />
                <div className="container">
                    <h2>Welcome to CloudDrop!</h2>
                    <p>
                    The CloudDrop allows user to upload and download files efficiently. Our App is powered by
                    Node.js framework and AWS! Try our software today!
                    </p>
                    
                </div>
                <br/>
                <br/>
                <Carousel />
                <br/>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default Home;
