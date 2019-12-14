import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart_widget';

import './nav.scss';

export default props => {
    return (
        <ul className="main-nav">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <CartWidget />
        </ul>
    )
}