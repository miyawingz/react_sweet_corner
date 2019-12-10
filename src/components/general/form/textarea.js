import React from 'react';
import './form.scss';

export default (props) => {
    const { input, id = input.name, type = "text", meta } = props;
    const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    return (
        <div className="input-field textarea">
            <textarea {...input} id={id} type={type} placeholder={placeholder} />
            <p>{meta.touched && meta.error}</p>
        </div>
    )
}