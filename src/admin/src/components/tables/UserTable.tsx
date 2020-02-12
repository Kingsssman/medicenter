import React from 'react';
import { Table } from 'react-bootstrap';

const UserTable = (props: any) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user: any) => (
            <tr key={user._id}>
              <td>
                <img
                  src={`data:${user.img.mimetype};base64,${
                    user.img.buffer}`}
                />
              </td>
              <td>{user.title}</td>
              <td>{user.desc}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => props.deleteUser(user.id)}>
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
    </Table>
  );
};

export default UserTable;
