import React from 'react';
import { Table } from 'react-bootstrap';
import './DoctorTable.scss';

const DoctorTable = (props: any) => {

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{ width: '25%' }}>Image</th>
          <th style={{ width: '20%' }}>Name</th>
          <th style={{ width: '20%' }}>Specialty</th>
          <th style={{ width: '20%' }}>Description</th>
          <th style={{ width: '15%' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.doctors.length > 0 ? (
          props.doctors.map((doctor: any) => (
            <tr key={doctor._id}>
              <td>
                <img
                  src={`data:${doctor.img.mimetype};base64,${doctor.img.buffer}`}
                  width={'100%'}
                />
              </td>
              <td>{doctor.name}</td>
              <td>{doctor.spec}</td>
              <td>{doctor.desc}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(doctor);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => props.deleteDoctor(doctor._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No doctors</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default DoctorTable;
