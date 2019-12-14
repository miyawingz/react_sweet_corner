import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    form: formReducer,
    products: productsReducer
});

export default rootReducer;