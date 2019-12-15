import React from 'react';
import './checkout.scss';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/form/input';
import { connect } from 'react-redux';
import { createGuestOrder } from '../actions';

class GuestCheckout extends React.Component {
    async handleGuestCheckout(formValues) {
        const orderInfo = await this.props.createGuestOrder(formValues);
        const { email, orderId } = orderInfo;
        const redirectUrl = `/orders/guest/${orderId}?email=${email}`;
        this.props.history.push(redirectUrl);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="guest-checkout" >
                <h1>Guest Checkout</h1>
                <form onSubmit={handleSubmit(this.handleGuestCheckout.bind(this))}>
                    <Field name="firstName" component={Input} placeholder="First Name" />
                    <Field name="lastName" component={Input} placeholder="Last Name" />
                    <Field name="email" component={Input} type="email" placeholder="Email" />
                    <div>
                        <button type="submit">Submit Order</button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(formValues) {
    const { lastName, firstName, email } = formValues;

    const errors = {};

    if (!lastName) {
        errors.lastName = 'please input last name'
    }

    if (!firstName) {
        errors.firstName = 'please input first name'
    }

    if (!email || !(RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$").test(email))) {
        errors.email = "please enter a valid email"
    }

    return errors;

}

export default connect(null, {
    createGuestOrder: createGuestOrder
})(reduxForm({
    form: 'guest-checkout',
    validate: validate
})(GuestCheckout));