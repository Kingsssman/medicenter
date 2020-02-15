import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditUserForm = (props: any) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event: any) => {
        event.preventDefault();
        props.updateUser(user.id, user);
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

      <Button variant='primary' type='submit' name='action'>
        Save
      </Button>
      <Button variant='primary' type='submit' name='cancel'>
        Cancel
      </Button>
    </Form>
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     props.updateUser(user.id, user);
    //   }}
    // >
    //   <div className='row'>
    //     <div className='input-field col s12'>
    //       <input
    //         id='title'
    //         type='text'
    //         className='validate'
    //         name='name'
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
    //         name='username'
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
    //     save
    //     <i className='material-icons right'></i>
    //   </button>
    //   <button
    //     className='btn waves-effect waves-light'
    //     name='cancel'
    //   >
    //     cancel
    //     <i className='material-icons right'></i>
    //   </button>
    // </form>
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();

    //     props.updateUser(user.id, user);
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
    //   <button>Update user</button>
    //   <button
    //     onClick={() => props.setEditing(false)}
    //     classNameName='button muted-button'
    //   >
    //     Cancel
    //   </button>
    // </form>
  );
};

export default EditUserForm;
