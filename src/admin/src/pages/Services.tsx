import React, { useState, Fragment } from 'react';
import EditUserForm from '../components/forms/EditUserForm';
import AddUserForm from '../components/forms/AddServiceForm';
import UserTable from '../components/tables/UserTable';
import axios from 'axios';

const Services = () => {
  const initialFormState = { id: null, title: '', desc: '' };

  // Setting state
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  React.useEffect(function effectFunction() {
    axios.get('api/services').then(response => {
      setUsers(response.data.services);
    });
  }, []);

  // CRUD operations
  const addUser = (user: any) => {
    const { title, desc } = user;
    axios.post('/api/services', {title, desc})
      .then(result => {
        console.log(result);
      });
  };

  const deleteUser = (id: any) => {
    setEditing(false);

    // setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id: number, updatedUser: any) => {
    setEditing(false);

    // setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user: any) => {
    setEditing(true);

    setCurrentUser({ id: user._id, title: user.title, desc: user.desc });
  };

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h5>Edit Service</h5>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h5>Add Service</h5>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h5>View Services</h5>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Services;
