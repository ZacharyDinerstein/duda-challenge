import React from 'react';
import './Form.scss';
import SubmitButton from '../button/SubmitButton.js';

const FormCreateUser = props => {
    let { formType, newUserName, newUserPass } = props,
        formHeading = 'Create New User',
        placeholderName = 'Arya Stark',
        placeholderPass = 'Not Today',
        thisStateNameKeyWillUpdateOnChange = 'newUserName',
        thisStatePassKeyWillUpdateOnChange = 'newUserPass',
        nameValueToUpdateInState = newUserName,
        passValueToUpdateInState = newUserPass,
        inputOnChangeMethod = (e) => props.handleFormInput(formType, e),
        formSubmitMedhod = (e) => props.handleFormSubmit(formType, thisStateNameKeyWillUpdateOnChange, thisStatePassKeyWillUpdateOnChange, e);


    return (
        <div className="form-wrapper shadow">
            <form onSubmit={formSubmitMedhod}>
                <h1>{formHeading}</h1>

                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={placeholderName}
                        onChange={inputOnChangeMethod}
                        value={nameValueToUpdateInState} 
                        data-state_key_to_update={thisStateNameKeyWillUpdateOnChange}
                        data-user_object_key_to_edit='name' />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={placeholderPass}
                        onChange={inputOnChangeMethod}
                        value={passValueToUpdateInState}
                        data-state_key_to_update={thisStatePassKeyWillUpdateOnChange}
                        data-user_object_key_to_edit='pass' />
                </div>
                <SubmitButton />
            </form>
        </div>
    );
}

export default FormCreateUser;