import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartTotals } from '../actions';

class CartWidget extends React.Component {
    componentDidMount() {
        this.props.getCartTotals();
    }

    render() {
        let items = 0;

        if (this.props.total && Object.keys(this.props.total).length > 0) {
            items = this.props.total.items;
        }

        return (
            <li className="cart-widget">
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                    <span className="cart-item-count">{items}</span>
                </Link>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return ({
        total: state.cart.total
    })
}

export default connect(mapStateToProps, {
    getCartTotals: getCartTotals
})(CartWidget);