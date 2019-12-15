import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, clearProductDetails, getProductDetails } from '../actions';
import Money from '../general/money';
import './product_details.scss';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    componentDidMount() {
        const { getProductDetails, match: { params } } = this.props;
        getProductDetails(params.product_id);
    }

    componentWillUnmount() {
        this.props.clearProductDetails();
    }


    decrementQuantity() {
        const { quantity } = this.state;
        if (quantity > 1) {
            this.setState({
                quantity: quantity - 1
            })
        }
    }

    async handleAddToCart() {
        const { id } = this.props.details;
        const { quantity } = this.state;
        await this.props.addItemToCart(id, quantity);
        this.props.history.push('/cart');
    }


    incrementQuantity() {
        const { quantity } = this.state;
        this.setState({
            quantity: quantity + 1
        })
    }


    render() {
        const { details } = this.props;
        if (details) {
            const { image, name, cost, caption, description } = details;
            return (
                <div className="product-details">
                    <div className="image">
                        <img src={image.url} alt={image.altText} />
                    </div>
                    <div className="content">
                        <p className="name">{name}</p>
                        <p className="caption">{caption}</p>
                        <p className="subtitle">Description</p>
                        <p className="description">{description}</p>
                        <Money className="cost" penny={cost} />
                        <p className="subtitle">Quantity</p>
                        <div className="cart-quantity">
                            <button className="btn-quantity" onClick={this.decrementQuantity.bind(this)}>-</button>
                            <div className="quantity">{this.state.quantity}</div>
                            <button className="btn-quantity" onClick={this.incrementQuantity.bind(this)}>+</button>
                            <button className="addToCart" onClick={this.handleAddToCart.bind(this)}>Add To Cart</button>
                        </div>
                    </div>

                </div>
            )
        }

        return (
            <div className="product-details">
                <h1>Product loading...</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        details: state.products.details
    })
}

export default connect(mapStateToProps, {
    addItemToCart: addItemToCart,
    clearProductDetails: clearProductDetails,
    getProductDetails: getProductDetails
})(ProductDetails);