import React from 'react';
import './Button.scss';

const EditButton = props => {
    return (
        <i 
            className="fas fa-pencil-alt"
            onClick={props.handleEditRow}
            disabled={props.showForm}
        ></i>
    )
}

export default EditButton