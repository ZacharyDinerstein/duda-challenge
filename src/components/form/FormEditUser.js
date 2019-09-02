import React from 'react';
import './Form.scss';
import SubmitButton from '../button/SubmitButton.js';

export const formStates = { EDIT_STATE: 'edit-user', CREATE_STATE: 'create-user' };

const FormEditUser = props => {
  let { editedUserName, editedUserPass, formType } = props,
    formHeading = 'Edit User',
    placeholderName = 'Edit name',
    placeholderPass = 'Edit comment',
    showForm = props.showForm ? true : false,
    thisStateNameKeyWillUpdateOnChange = 'editedUserName',
    thisStatePassKeyWillUpdateOnChange = 'editedUserPass',
    nameValueToUpdateInState = editedUserName,
    passValueToUpdateInState = editedUserPass,
    inputOnChangeMethod = (e) => props.handleFormInput(formType, e),
    formSubmitMedhod = (e) => props.handleFormSubmit(formType, thisStateNameKeyWillUpdateOnChange, thisStatePassKeyWillUpdateOnChange, e);


  return (
    <div className="form-wrapper shadow">
      <form
        onSubmit={formSubmitMedhod}
        className={showForm ? '' : 'hidden'} >
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
            placeholder={placeholderPass}
            onChange={inputOnChangeMethod}
            value={passValueToUpdateInState}
            data-state_key_to_update={thisStatePassKeyWillUpdateOnChange}
            data-user_object_key_to_edit='pass' />
        </div>
        <SubmitButton text="Save"/>
      </form>
    </div>
  );
}

export default FormEditUser