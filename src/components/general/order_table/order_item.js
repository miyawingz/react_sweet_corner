import React from 'react';
import Money from '../money';

export default (props) => {
    console.log('order item', props);
    const { thumbnail, name, each, quantity, total } = props.item;

    if (!fromCart) {
        let { product, each, quantity, total } = props.item;
        let { name, thumbnail } = product;
    } 
    
    return (
        <tr>
            <td className="thumbnail">
                <img src={thumbnail.url} alt={thumbnail.altText} />
            </td>
            <td className="name">{name}</td>
            <td className="each"><Money penny={each} /></td>
            <td className="quantity">{quantity}</td>
            <td className="total"><Money penny={total} /></td>
        </tr>
    )
}