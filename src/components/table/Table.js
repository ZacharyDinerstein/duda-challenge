import React from 'react';
import EditButton from '../button/EditButton.js';
import DeleteButton from '../button/DeleteButton.js';
import './Table.scss';


const returnSrc = src => src; 

const addAvatar = () => {
  let src = '';
  const imgGen = require('@dudadev/random-img');
  imgGen().then(avatarURL => {
    src = avatarURL;
    console.log(src);
    returnSrc(src);
  })
}



const Table = props => {
  return (
    <table className="shadow">
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
              className={rowIsBeingEditied ? 'selected-row':''} 
            >
              
              <td><img src={addAvatar()} alt=""/></td>
              <td>
                <div className="text-container">
                  <td>{name}</td><td>{pass}</td>
                </div>
              </td>
              
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