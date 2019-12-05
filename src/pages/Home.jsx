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
                    subtitle="Powered by cloud technology to allow you to securely upload your images!"
                />
                <div className="container">
                    <h2>Welcome to CloudDrop!</h2>
                    <p>
                        CloudDrop allows user to upload their own images in a
                        secure manner. Our App is powered by Node.js framework
                        and AWS! Try our software today!
                    </p>
                </div>
                <br />
                <br />
                <Carousel />
                <br />
                <br />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Home;
