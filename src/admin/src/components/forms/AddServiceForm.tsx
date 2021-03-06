import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const AddServiceForm = (props: any) => {
  const initialFormState = { title: '', desc: '', img: '' };
  const [service, setService] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setService({ ...service, [name]: value });
  };

  const handleFileInputChange = (e: any) => {
    setService({ ...service, [e.target.name]: e.target.files[0].name });
  };

  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();

        if (!service.title || !service.desc || !service.img) return;

        props.addService(service);
        (document.getElementById('inputGroupFile01') as any).value = '';
        setService(initialFormState);
      }}
    >
      <Form.Group controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title'
          name='title'
          value={service.title}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='formDesc'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Description'
          name='desc'
          value={service.desc}
          onChange={handleInputChange}
        />
      </Form.Group>

      <FormGroup>
        <Form.Label>Image</Form.Label>
        <FormControl
          type='file'
          name='img'
          id='inputGroupFile01'
          onChange={handleFileInputChange}
        />
      </FormGroup>

      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default AddServiceForm;
