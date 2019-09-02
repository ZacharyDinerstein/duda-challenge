import React from 'react';
import './Button.scss';

const EditButton = props => {
    return (
        <button
            onClick={props.handleEditRow}
            className="btn btn-info btn-lg"
            disabled={props.showForm} >
            Edit
        </button>
    )
}

export default EditButton