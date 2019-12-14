import React from 'react';

export default (props) => {
    const { penny, className } = props;
    const dollar = (penny / 100).toFixed(2);
    return (
        <p className={className}>${dollar}</p>
    )
}