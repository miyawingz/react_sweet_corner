import React from 'react';
import Money from '../general/money';

export default (props) => {
    console.log(props);
    const { id, caption, cost, name, thumbnail } = props;
    const { url, altText } = thumbnail;

    return (
        <div className="product-item" id={id}>
            <h3 className="name">{name}</h3>
            <img className="thumbnail" src={url} alt={altText} />
            <p className="caption">{caption}</p>
            <Money className="cost" penny={cost} />
        </div>
    )
}