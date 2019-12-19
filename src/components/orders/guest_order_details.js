import React from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../actions';
import { queryToObject } from '../../helpers';
import OrderTable from '../general/order_table';
import Money from '../general/money';

class GuestOrderDetails extends React.Component {
    componentDidMount() {
        const { location, match: { params } } = this.props
        const orderId = params.order_id;
        const query = queryToObject(location.search);
        const { email } = query;
        this.props.getGuestOrderDetails(orderId, email);
    }

    render() {
        console.log(this.props.orderDetails)
        if (this.props.orderDetails) {
            const { createdAt, id, itemCount, items, status, total } = this.props.orderDetails;
            return (
                <div className="order">
                    <h1>Guest Order Details</h1>
                    <h1>Status: {status}</h1>
                    <p>order#: {id}</p>
                    <p>** Save order number to check order status in the future **</p>
                    <div className="order-details">
                        <p>Order Placed: {createdAt}</p>
                        <p>Order Total Items: {itemCount}</p>
                        <p>Order Total Cost: {total}</p>
                        <h2>Order Items</h2>
                        <OrderTable items={items} total={total} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h1>Guest Order Details Loading...</h1>
            </div>
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