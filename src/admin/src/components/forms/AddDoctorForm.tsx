import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const AddDoctorForm = (props: any) => {
  const initialFormState = { name: '', spec: '', desc: '', img: '' };
  const [doctor, setDoctor] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setDoctor({ ...doctor, [name]: value });
  };

  const handleFileInputChange = (e: any) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.files[0].name });
  };

  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();

        if (!doctor.name || !doctor.spec || !doctor.desc || !doctor.img)
          return;

        props.addDoctor(doctor);
        (document.getElementById('inputGroupFile03') as any).value = '';
        setDoctor(initialFormState);
      }}
    >
      <Form.Group controlId='formTitle'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          name='name'
          value={doctor.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='formSpec'>
        <Form.Label>Specialty</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Specialty'
          name='spec'
          value={doctor.spec}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='formDesc'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Description'
          name='desc'
          value={doctor.desc}
          onChange={handleInputChange}
        />
      </Form.Group>

      <FormGroup>
        <Form.Label>Image</Form.Label>
        <FormControl
          type='file'
          name='img'
          id='inputGroupFile03'
          onChange={handleFileInputChange}
        />
      </FormGroup>

      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default AddDoctorForm;
