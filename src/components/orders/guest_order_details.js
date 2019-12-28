import React from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../actions';
import { queryToObject } from '../../helpers';
import Money from '../general/money';
import './guest_order_details.scss';

class GuestOrderDetails extends React.Component {
    componentDidMount() {
        const { location, match: { params } } = this.props
        const orderId = params.order_id;
        const query = queryToObject(location.search);
        const { email } = query;
        this.props.getGuestOrderDetails(orderId, email);
    }

    render() {
        if (this.props.orderDetails) {
            const { createdAt, id, itemCount, items, status, total } = this.props.orderDetails;
            let itemElement = [];

            if (items) {
                itemElement = items.map(item => {
                    const { product, each, quantity, total } = item;
                    const { id, thumbnail, name } = product;
                    return (
                        <tr key={id}>
                            <td className="thumbnail">
                                <img src={thumbnail.url} alt={thumbnail.altText} />
                            </td>
                            <td className="name">{name}</td>
                            <td className="each"><Money penny={each} /></td>
                            <td className="quantity">{quantity}</td>
                            <td className="total"><Money penny={total} /></td>
                        </tr>
                    )
                })
            }

            return (
                <div className="order center">
                    <h1><span style={{ color: '#06b4af' }}>Guest </span>Order Details</h1>
                    <h1>Status: <span style={{ color: '#f6b53e' }}>{status}</span></h1>
                    <h2>Order#: <span style={{ color: '#e86b35' }}>{id}</span></h2>
                    <h3>** Save order number to check order status in the future **</h3>
                    <div className="order-details">
                        <p>Order Placed: <span>{new Date(createdAt).toLocaleString()}</span></p>
                        <p>Order Total Items:<span> {itemCount}</span></p>
                        <p>Order Total Cost: {<Money penny={total} />}</p>
                        <p>Order Items:</p>
                        <table className="center">
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
                                    <td colSpan="3">Order Totals:</td>
                                    <td>{itemCount}</td>
                                    <td><Money penny={total} /></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>Guest Order Details Loading...</h1>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return ({
        orderDetails: state.orders.details
    })
}

export default connect(mapStateToProps, {
    getGuestOrderDetails: getGuestOrderDetails
})(GuestOrderDetails);