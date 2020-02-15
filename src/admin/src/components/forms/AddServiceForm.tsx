import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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

  const { img } = user
  let file = null;

  file = img ? (
    <span>File Selected - {img}</span>
  ) : (
    <span>Choose a file...</span>
    );
  
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

      <div className='input-group mb-3'>
        <div className='custom-file'>
          <input
            type='file'
            className='custom-file-input'
            id='inputGroupFile01'
            aria-describedby='inputGroupFileAddon01'
            name='img'
            onChange={handleFileInputChange}
          />
          <label className='custom-file-label' htmlFor='inputGroupFile01'>
            {file}
          </label>
        </div>
      </div>

      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default AddUserForm;
