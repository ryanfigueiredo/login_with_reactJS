import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../assets'

import React from 'react'
import Home from '../template/home'
import Navbar from '../template/navbar'

export default props => (
    <div>
        <Navbar />
        <Home />
    </div>
)