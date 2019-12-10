import React from 'react';
import './form.scss';

export default (props) => {
    const { input, id = input.name, type = "text", meta } = props;
    const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    return (
        <div className="input-field">
            <input {...input} type={type} id={id} placeholder={placeholder} />
            <p>{meta.touched && meta.error}</p>
        </div>
    );
}