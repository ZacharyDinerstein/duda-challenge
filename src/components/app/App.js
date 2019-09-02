import React from 'react';
import './App.scss';
import Table from '../table/Table.js';
import { formStates } from '../form/FormStates.js';
import FormCreateUser from '../form/FormCreateUser.js';
import FormEditUser from '../form/FormEditUser.js';
import usersData from '../../data/data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: usersData,
      newUserName: '',
      newUserPass: '',
      editedUserName: '',
      editedUserPass: '',
      newUserIdNum: usersData.length,
      userIdToEdit: null,
      showForm: false
    };
  }


  handleDeleteRow = (id) => {
    let newUsersArr = this.state.users.filter(user => user.id !== id);

    this.setState({
      users: newUsersArr
    });
  }

  handleEditRow = (id) => {
    this.setState({
      showForm: !this.state.showForm,
      userIdToEdit: id
    })
  }


  /* Handles both New User and Edit User Form input changes */
  handleFormInput = (formType, e) => {
    let stateKey = [e.target.dataset.state_key_to_update];

    if (formType === formStates.EDIT_STATE) {
      let { userIdToEdit, users } = this.state,
        newUsersArr = [...users],
        userToEdit = users.findIndex(item => item.id === userIdToEdit),
        userObjectKeyToEdit = e.target.dataset.user_object_key_to_edit;

      newUsersArr[userToEdit][userObjectKeyToEdit] = e.target.value;
      this.setState({ users: newUsersArr });
    }

    this.setState({
      [stateKey]: e.target.value
    })
  }


  handleFormSubmit = (formType, stateNameKeyToUpdate, statePassKeyToUpdate, e) => {
    e.preventDefault();

    if (formType === formStates.CREATE_STATE) {
      let { newUserIdNum, newUserName, newUserPass, users } = this.state,
        newUsersArr = [...users],
        newUser,
        increasedUserId;

      if (!newUserName || !newUserPass) { return }

      newUser = {
        id: newUserIdNum,
        name: newUserName,
        pass: newUserPass
      }

      increasedUserId = newUserIdNum + 1;
      newUsersArr.push(newUser);

      this.setState({
        users: newUsersArr,
        newUserIdNum: increasedUserId
      })
    }

    if (formType === formStates.EDIT_STATE) {
      let { editedUserName, editedUserPass } = this.state;

      // Users cannot submit empty fields
      if (!editedUserName || !editedUserPass) { return }

      this.setState({
        showForm: this.state.showForm ? false : true,
        userIdToEdit: null
      })
    }

    this.setState({
      [stateNameKeyToUpdate]: '',
      [statePassKeyToUpdate]: ''
    })
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 title-container">
            <h1>User Reviews</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <FormCreateUser
                  formType='create-user'
                  handleFormInput={this.handleFormInput}
                  handleFormSubmit={(formType, stateNameKeyToUpdate, statePassKeyToUpdate, e) => this.handleFormSubmit(formType, stateNameKeyToUpdate, statePassKeyToUpdate, e)}
                  newUserName={this.state.newUserName}
                  newUserPass={this.state.newUserPass} />
              </div>
              <div className="col-lg-8">
                <Table
                  users={this.state.users}
                  showForm={this.state.showForm}
                  userIdToEdit={this.state.userIdToEdit}
                  handleEditRow={(id) => this.handleEditRow(id)}
                  handleDeleteRow={(id) => this.handleDeleteRow(id)} />
              </div>
              <div className="col-lg-12">
                <FormEditUser
                  formType='edit-user'
                  handleFormInput={(formType, e) => this.handleFormInput(formType, e)}
                  handleFormSubmit={(formType, stateNameKeyToUpdate, statePassKeyToUpdate, e) => this.handleFormSubmit(formType, stateNameKeyToUpdate, statePassKeyToUpdate, e)}
                  editedUserName={this.state.editedUserName}
                  editedUserPass={this.state.editedUserPass}
                  showForm={this.state.showForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
