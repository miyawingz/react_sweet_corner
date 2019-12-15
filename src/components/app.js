import React from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import Cart from './cart';
import Contact from './contact';
import Footer from './footer';
import GuestCheckout from './checkout/guest_checkout';
import Header from './header';
import Home from './home';
import ProductDetails from './products/product_details';
import Products from './products';
import Services from './services';

import '../assets/css/app.scss';

const App = () => (
    <div className="app">
        <div className="container">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout/guest" component={GuestCheckout} />
            <Route path="/" exact component={Home} />
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route path="/products" exact component={Products} />
            <Route path="/services" component={Services} />
            <Footer />
        </div>
    </div>
);

export default App;
