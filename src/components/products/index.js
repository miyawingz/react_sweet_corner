import './products.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions';


class Products extends React.Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {
        const { products } = this.props;
        return (
            <div className="products">
                <h1>product page</h1>
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