import React from 'react';
import { Table } from 'react-bootstrap';
import './UserTable.scss'

const UserTable = (props: any) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{ width: '25%' }}>Image</th>
          <th style={{ width: '30%' }}>Title</th>
          <th style={{ width: '30%' }}>Description</th>
          <th style={{ width: '15%' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user: any) => (
            <tr key={user._id}>
              <td>
                <img
                  src={`data:${user.img.mimetype};base64,${user.img.buffer}`} width={'100%'}
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
                <button onClick={() => props.deleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
