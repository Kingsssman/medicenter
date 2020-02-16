import React from 'react';
import { Table } from 'react-bootstrap';
import './ServiceTable.scss'

const ServiceTable = (props: any) => {
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
        {props.services.length > 0 ? (
          props.services.map((service: any) => (
            <tr key={service._id}>
              <td>
                <img
                  src={`data:${service.img.mimetype};base64,${service.img.buffer}`} width={'100%'}
                />
              </td>
              <td>{service.title}</td>
              <td>{service.desc}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(service);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => props.deleteService(service._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No services</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ServiceTable;
