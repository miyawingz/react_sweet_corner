import './products.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions';
import ProductItem from './product_item';


class Products extends React.Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        const { products } = this.props;
        const productItems = products.map(item => {
            return <ProductItem key={item.id} {...item} />
        })
        return (
            <div className="products" >
                <h1>Shop Our Cupcakes</h1>
                {productItems}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);