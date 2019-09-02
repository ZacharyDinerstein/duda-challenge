import React from 'react';
import './Button.scss';

const DeleteButton = props => {
    return (
        <button
            onClick={props.handleDeleteRow}
            className="btn btn-info btn-lg btn--delete"
            disabled={props.showForm} >
            Delete
        </button>
    )
}

export default DeleteButton