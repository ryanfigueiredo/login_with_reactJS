import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthOrApp from './authOrApp'
import Home from '../template/home'

export default props => (
    <Router>
        <Route path='/' component={AuthOrApp} />
        <Route path='home' component={Home} />
    </Router>
)