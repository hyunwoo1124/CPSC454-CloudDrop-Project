import React, {Component} from 'react';


import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component{
  render(){
      return(
        <div>
            <Navbar/>
            <Jumbotron title=" About us" subtitle="CSUF students that wanted to create something more..." />
            <div className="container">
                <h2>About us</h2>
                <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit
                , sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nunc scelerisque viverra mauris in. Dia
                m sollicitudin tempor id eu nisl nunc. Massa massa ul
                tricies mi quis hendrerit dolor magna. Egestas pretiu
                m aenean pharetra magna ac. Adipiscing tristique risu
                s nec feugiat in fermentum posuere urna nec. Sit amet
                massa vitae tortor condimentum lacinia. Nisl vel pre
                tium lectus quam. Erat pellentesque adipiscing commo
                do elit at imperdiet dui accumsan. Feugiat nisl preti
                fusce id velit ut tortor pretium. Sit amet purus gravi
                da quis. Molestie ac feugiat sed lectus vestibulum ma
                ttis. Volutpat odio facilisis mauris sit. Neque ornar
                e aenean euismod elementum. Viverra justo nec ultrices dui.
                </p>
                
            </div>
            <Footer />
        </div>
        
      );
  }
}

export default About