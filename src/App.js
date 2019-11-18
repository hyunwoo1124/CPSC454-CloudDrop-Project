import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
// import Dash from './pages/Dash.jsx';
import Dashboard from './pages/Dashboard';
import ImageDetail from './pages/ImageDetail';
import NewImage from './pages/NewImage';
import Shared from './pages/Shared';
import View from './pages/View';

class App extends Component {
    state = { auth: null };

    componentDidMount() {
        axios.get('/api/current_user').then(user => {
            this.setState({ auth: user.data });
        });
    }

    render() {
        const { auth } = this.state;
        return (
            <Router>
                <div>
                    <Navbar auth={auth} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/images" component={NewImage} />
                    <Route exact path="/images/:key" component={ImageDetail} />
                    <Route exact path="/shared" component={Shared} />
                    <Route exact path="/view/:key" component={View} />
                </div>
            </Router>
        );
    }
}

export default App;
