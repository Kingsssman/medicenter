import React, { useState, Fragment } from 'react';
import EditDoctorForm from '../components/forms/EditDoctorForm';
import AddDoctorForm from '../components/forms/AddDoctorForm';
import DoctorTable from '../components/tables/DoctorTable';
import axios from 'axios';

const Doctors = () => {
  const initialFormState = { id: null, name: '', spec: '', desc: '', img: null };

  // Setting state
  const [doctors, setDoctors] = useState<any[]>([]);
  const [currentDoctor, setCurrentDoctor] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  React.useEffect(function effectFunction() {
    axios.get('api/doctors').then(response => {
      setDoctors(response.data.doctors);
    });
  }, []);

  // CRUD operations
  const addDoctor = (doctor: any) => {
    const file = (document as any).getElementById('inputGroupFile03').files;
    const formData = new FormData();

    formData.append('img', file[0]);
    formData.append('name', doctor.name);
    formData.append('spec', doctor.spec);
    formData.append('desc', doctor.desc);

    axios.post('/api/doctors', formData).then(result => {
      console.log(result);
      setDoctors([...doctors, result.data.doctor]);
    });
  };

  const deleteDoctor = (id: number) => {
    setEditing(false);

    axios.delete('/api/doctors/' + id).then(res => {
      setDoctors(doctors.filter(doctor => doctor['_id'] !== id));
    });
  };

  const updateDoctor = (id: number, updatedDoctor: any) => {
    setEditing(false);

    const file = (document as any).getElementById('inputGroupFile04').files;
    const formData = new FormData();

    formData.append('img', file[0]);
    formData.append('name', updatedDoctor.name);
    formData.append('spec', updatedDoctor.spec);
    formData.append('desc', updatedDoctor.desc);

    axios.put('/api/doctors/' + id, formData).then(res => {
      console.log(res);
      setDoctors(
        doctors.map(doctor =>
          doctor['_id'] === id ? res.data.doctor : doctor
        )
      );
    });
  };

  const editRow = (doctor: any) => {
    setEditing(true);

    setCurrentDoctor({
      id: doctor._id,
      name: doctor.name,
      spec: doctor.spec,
      desc: doctor.desc,
      img: doctor.img
    });
  };

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h5>Edit Doctor</h5>
              <EditDoctorForm
                editing={editing}
                setEditing={setEditing}
                currentDoctor={currentDoctor}
                updateDoctor={updateDoctor}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h5>Add Doctor</h5>
              <AddDoctorForm addDoctor={addDoctor} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h5>View Doctors</h5>
          <DoctorTable
            doctors={doctors}
            editRow={editRow}
            deleteDoctor={deleteDoctor}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
