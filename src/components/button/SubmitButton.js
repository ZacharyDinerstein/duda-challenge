import React from 'react';
import './Button.scss';

const SubmitButton = props => {
    return <button className="btn btn-info btn-lg">{props.text}</button>
}

export default SubmitButton