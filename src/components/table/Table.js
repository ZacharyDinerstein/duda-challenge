import React from 'react';
import EditButton from '../button/EditButton.js';
import DeleteButton from '../button/DeleteButton.js';
import './Table.scss';

const Table = props => {
  return (
    <table className="shadow">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => {
          let { id, name, pass } = user;
          let rowIsBeingEditied,
              userIdToEdit = props.userIdToEdit;

          if ( userIdToEdit === id){
            rowIsBeingEditied = true;
          }

          return (
            <tr 
              key={id} 
              data-key={id} 
              className={rowIsBeingEditied ? 'selected-row':''} >
                
              <td>{id}</td><td>{name}</td><td>{pass}</td>
              <td>
                <EditButton 
                  showForm={props.showForm} 
                  handleEditRow={() => props.handleEditRow(id)} />
              </td>
              <td>
                <DeleteButton 
                  showForm={props.showForm} 
                  handleDeleteRow={() => props.handleDeleteRow(id)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table