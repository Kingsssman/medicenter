import React, { useState, useEffect } from 'react';
import { Form, Button, Image, FormGroup, FormControl } from 'react-bootstrap';

const EditServiceForm = (props: any) => {
  const [service, setService] = useState(props.currentService);

  useEffect(() => {
    setService(props.currentService);
  }, [props]);

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

        props.updateService(service.id, service);
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
          autoFocus
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
          id='inputGroupFile02'
          onChange={handleFileInputChange}
        />
      </FormGroup>

      <Button variant='primary' type='submit' name='action'>
        Save
      </Button>
      <Button
        variant='primary'
        name='cancel'
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </Button>
    </Form>
    // <form
    //   onSubmit={event => {
    //     event.preventDefault();
    //     props.updateService(service.id, service);
    //   }}
    // >
    //   <div className='row'>
    //     <div className='input-field col s12'>
    //       <input
    //         id='title'
    //         type='text'
    //         className='validate'
    //         name='name'
    //         value={service.title}
    //         onChange={handleInputChange}
    //       />
    //       <label htmlFor='title'>Title</label>
    //     </div>
    //     <div className='input-field col s12'>
    //       <input
    //         id='desc'
    //         type='text'
    //         className='validate'
    //         name='servicename'
    //         value={service.desc}
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

    //     props.updateService(service.id, service);
    //   }}
    // >
    //   <label>Name</label>
    //   <input
    //     type='text'
    //     name='name'
    //     value={service.name}
    //     onChange={handleInputChange}
    //   />
    //   <label>Servicename</label>
    //   <input
    //     type='text'
    //     name='servicename'
    //     value={service.servicename}
    //     onChange={handleInputChange}
    //   />
    //   <button>Update service</button>
    //   <button
    //     onClick={() => props.setEditing(false)}
    //     classNameName='button muted-button'
    //   >
    //     Cancel
    //   </button>
    // </form>
  );
};

export default EditServiceForm;
