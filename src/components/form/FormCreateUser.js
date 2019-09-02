import React from 'react';
import './Form.scss';
import SubmitButton from '../button/SubmitButton.js';

const FormCreateUser = props => {
    let { formType, newUserName, newUserPass } = props,
        formHeading = 'Create New User',
        placeholderName = 'Your name',
        placeholderComment = 'Your comment',
        thisStateNameKeyWillUpdateOnChange = 'newUserName',
        thisStatePassKeyWillUpdateOnChange = 'newUserPass',
        nameValueToUpdateInState = newUserName,
        passValueToUpdateInState = newUserPass,
        inputOnChangeMethod = (e) => props.handleFormInput(formType, e),
        formSubmitMedhod = (e) => props.handleFormSubmit(formType, thisStateNameKeyWillUpdateOnChange, thisStatePassKeyWillUpdateOnChange, e);


    return (
        <div className="form-wrapper shadow">
            <form onSubmit={formSubmitMedhod}>
                <div className="form-group">
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
                    <input
                        type="text"
                        className="form-control"
                        placeholder={placeholderComment}
                        onChange={inputOnChangeMethod}
                        value={passValueToUpdateInState}
                        data-state_key_to_update={thisStatePassKeyWillUpdateOnChange}
                        data-user_object_key_to_edit='pass' />
                </div>
                <SubmitButton text="Add"/>
            </form>
        </div>
    );
}

export default FormCreateUser;