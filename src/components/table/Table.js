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
    <>
      {props.users.map((user, index) => {
        let { id, name, pass } = user;
        let rowIsBeingEditied,
          userIdToEdit = props.userIdToEdit;

        if (userIdToEdit === id) {
          rowIsBeingEditied = true;
        }

        return (

          <div
            key={id}
            data-key={id}
            className={rowIsBeingEditied ? 'selected-row shadow post' : 'shadow post'}
          >
            <div className="row">
              <div className="img-container col-2">
              </div>
              <div className="text-container col-8">
                <p>{name}</p>
                <p>{pass}</p>
              </div>
              <div className="btn-container col-2">
                <EditButton
                  showForm={props.showForm}
                  handleEditRow={() => props.handleEditRow(id)} />
                <DeleteButton
                  showForm={props.showForm}
                  handleDeleteRow={() => props.handleDeleteRow(id)} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Table