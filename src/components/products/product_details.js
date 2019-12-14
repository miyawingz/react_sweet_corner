import React from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../actions';
import Money from '../general/money';
import './product_details.scss';

class ProductDetails extends React.Component {
    componentDidMount() {
        const { getProductDetails, match: { params } } = this.props
        getProductDetails(params.product_id);
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
                        <p className="description-title">Description</p>
                        <p className="description">{description}</p>
                        <Money className="cost" penny={cost} />
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
    getProductDetails: getProductDetails
})(ProductDetails);