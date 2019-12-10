import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scheduleReducer from './schedule_reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    schedule: scheduleReducer,
    products:productsReducer
});

export default rootReducer;