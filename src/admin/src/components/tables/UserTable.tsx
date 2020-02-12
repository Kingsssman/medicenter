import React from 'react';

const UserTable = (props: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.title}</td>
              <td>{user.desc}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className='button muted-button'
                >
                  Edit
              </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className='button muted-button'
                >
                  Delete
              </button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
      </tbody>
    </table>
  );
}

export default UserTable;
