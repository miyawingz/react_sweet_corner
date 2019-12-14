import React from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../actions';
import './cart.scss';

class Cart extends React.Component {
    componentDidMount() {
        this.props.getActiveCart();
    }

    render() {
        console.log(this.props.cartItems);
        return (
            <div>
                <h1>cart</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartItems: state.cart
    })
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart);