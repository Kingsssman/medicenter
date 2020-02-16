import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

const AddUserForm = (props: any) => {
  const initialFormState = { title: '', desc: '', img: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleFileInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.files[0].name });
  };

  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();

        if (!user.title || !user.desc || !user.img) return;

        props.addUser(user);
        (document.getElementById('inputGroupFile01') as any).value = '';
        setUser(initialFormState);
      }}
    >
      <Form.Group controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title'
          name='title'
          value={user.title}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='formDesc'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Description'
          name='desc'
          value={user.desc}
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

export default AddUserForm;
