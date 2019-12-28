import React from 'react';
import { connect } from 'react-redux';
import { getActiveCart, deleteItemFromCart } from '../actions';
import { Link } from 'react-router-dom';
import Money from '../general/money';
import './cart.scss';

class Cart extends React.Component {
    componentDidMount() {
        this.props.getActiveCart();
    }

    async handleDelete(e) {
        const id = e.target.getAttribute('value');
        const resp = await this.props.deleteItemFromCart(id);
        this.props.getActiveCart();
    }


    render() {
        const { items, total } = this.props.cartItems;

        if (items && items.length > 0) {
            const itemElement = items.map(item => {
                const { productId, thumbnail, name, each, quantity, total, itemId } = item;
                return (
                    <tr key={productId}>
                        <td className="thumbnail">
                            <img src={thumbnail.url} alt={thumbnail.altText} />
                        </td>
                        <td className="name">{name}</td>
                        <td className="each"><Money penny={each} /></td>
                        <td className="quantity">{quantity}</td>
                        <td className="total"><Money penny={total} /></td>
                        <td>
                            <i onClick={this.handleDelete.bind(this)} value={itemId} className="material-icons">delete</i>
                        </td>
                    </tr>
                )
            })

            return (
                <div className="cart center">
                    <h1>Cart</h1>
                    <table>
                        <thead>
                            <tr>
                                <td className="thumbnail"></td>
                                <td className="name">Product</td>
                                <td className="each">Each</td>
                                <td className="quantity">Quantity</td>
                                <td className="total">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {itemElement}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3">Cart Total:</td>
                                <td>{total.items}</td>
                                <td><Money penny={total.cost} /></td>
                            </tr>
                        </tfoot>
                    </table>
                    <Link to="/checkout/guest"><button>Checkout As Guest</button></Link>
                </div>
            )
        }

        if (items && items.length == 0) {
            return (
                <h1 className="center"> Cart is empty, please add product</h1 >
            )
        }

        return (
            <h1 className="center"> Cart Loading...</h1 >
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartItems: state.cart
    })
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
    deleteItemFromCart: deleteItemFromCart
})(Cart);