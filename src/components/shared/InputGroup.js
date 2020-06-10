import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function InputGroup({
    name,
    value,
    placeholder,
    type,
    onChange,
    error,
}) {
    return (
        <div className='form-group'>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classnames('form-style', {
                    isValid: error.noError === false ? true : false,
                })}
            />
            {error.noError === false && (
                <div className='invalid-message'>{error.message}</div>
            )}
        </div>
    );
}
