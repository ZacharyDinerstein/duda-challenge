import React from 'react';
import './Button.scss';

const DeleteButton = props => {
    return (
        <i 
            className="fas fa-trash-alt"
            onClick={props.handleDeleteRow}
            disabled={props.showForm}
        ></i>
    )
}

export default DeleteButton