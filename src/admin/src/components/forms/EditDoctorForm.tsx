import React, { useState, useEffect } from 'react';
import { Form, Button, Image, FormGroup, FormControl } from 'react-bootstrap';

const EditDoctorForm = (props: any) => {
  const [doctor, setDoctor] = useState(props.currentDoctor);

  useEffect(() => {
    setDoctor(props.currentDoctor);
  }, [props]);

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

        if (!doctor.name || !doctor.spec || !doctor.desc || !doctor.img) return;

        props.updateDoctor(doctor.id, doctor);
      }}
    >
      <Form.Group controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          name='name'
          value={doctor.name}
          onChange={handleInputChange}
          autoFocus
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
          id='inputGroupFile04'
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
    //     props.updateDoctor(doctor.id, doctor);
    //   }}
    // >
    //   <div className='row'>
    //     <div className='input-field col s12'>
    //       <input
    //         id='name'
    //         type='text'
    //         className='validate'
    //         name='name'
    //         value={doctor.name}
    //         onChange={handleInputChange}
    //       />
    //       <label htmlFor='name'>Name</label>
    //     </div>
    //     <div className='input-field col s12'>
    //       <input
    //         id='desc'
    //         type='text'
    //         className='validate'
    //         name='doctorname'
    //         value={doctor.desc}
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

    //     props.updateDoctor(doctor.id, doctor);
    //   }}
    // >
    //   <label>Name</label>
    //   <input
    //     type='text'
    //     name='name'
    //     value={doctor.name}
    //     onChange={handleInputChange}
    //   />
    //   <label>Doctorname</label>
    //   <input
    //     type='text'
    //     name='doctorname'
    //     value={doctor.doctorname}
    //     onChange={handleInputChange}
    //   />
    //   <button>Update doctor</button>
    //   <button
    //     onClick={() => props.setEditing(false)}
    //     classNameName='button muted-button'
    //   >
    //     Cancel
    //   </button>
    // </form>
  );
};

export default EditDoctorForm;
