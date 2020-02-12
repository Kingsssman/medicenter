import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUserForm = (props: any) => {
  const initialFormState = { title: '', desc: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();

        if (!user.title || !user.desc) return;

        const file = (document as any).getElementById('inputGroupFile01').files;
        const formData = new FormData();

        formData.append('img', file[0]);
        
        console.log(formData)
        fetch('api/services', {
          method: 'POST',
          body: formData
        }).then(r => {
          console.log(r);
        });
        
        console.log(file[0]);

        // props.addUser(user);
        // setUser(initialFormState);
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
          />
          <label className='custom-file-label' htmlFor='inputGroupFile01'>
            Choose Image
          </label>
        </div>
      </div>

      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     if (!user.title || !user.desc) return;

    //     props.addUser(user);
    //     setUser(initialFormState);
    //   }}
    // >
    //   <div className='row'>
    //     <div className='input-field col s12'>
    //       <input
    //         id='title'
    //         type='text'
    //         className='validate'
    //         name='title'
    //         value={user.title}
    //         onChange={handleInputChange}
    //       />
    //       <label htmlFor='title'>Title</label>
    //     </div>
    //     <div className='input-field col s12'>
    //       <input
    //         id='desc'
    //         type='text'
    //         className='validate'
    //         name='desc'
    //         value={user.desc}
    //         onChange={handleInputChange}
    //       />
    //       <label htmlFor='desc'>Description</label>
    //     </div>
    //     <div>Choose Image</div>
    //     <div className='file-field input-field'>
    //       <div className='btn'>
    //         <span>File</span>
    //         <input type='file' />
    //       </div>
    //       <div className='file-path-wrapper'>
    //         <input className='file-path validate' type='text' />
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className='btn waves-effect waves-light'
    //     type='submit'
    //     name='action'
    //   >
    //     Add new
    //     <i className='material-icons right'></i>
    //   </button>
    // </form>
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     if (!user.name || !user.username) return;

    //     props.addUser(user);
    //     setUser(initialFormState);
    //   }}
    // >
    //   <label>Name</label>
    //   <input
    //     type='text'
    //     name='name'
    //     value={user.name}
    //     onChange={handleInputChange}
    //   />
    //   <label>Username</label>
    //   <input
    //     type='text'
    //     name='username'
    //     value={user.username}
    //     onChange={handleInputChange}
    //   />
    //   <button>Add new user</button>
    // </form>
  );
};

export default AddUserForm;
