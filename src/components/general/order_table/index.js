import React from 'react';
import OrderItem from './order_item';
import Money from '../money';
import './order_table.scss';

export default (props) => {
    console.log('order table', props);
    const { items, total, fromCart } = props;
    const itemElement = items.map(item => {
        return <OrderItem key={item.productId} item={item} fromCart={fromCart} />
    })
    return (
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
    )
}