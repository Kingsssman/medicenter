import React, { useState, Fragment } from 'react';
import EditServiceForm from '../components/forms/EditServiceForm';
import AddServiceForm from '../components/forms/AddServiceForm';
import ServiceTable from '../components/tables/ServiceTable';
import axios from 'axios';

const Services = () => {
  const initialFormState = { id: null, title: '', desc: '', img:null };

  // Setting state
  const [services, setServices] = useState<any[]>([]);
  const [currentService, setCurrentService] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  React.useEffect(function effectFunction() {
    axios.get('api/services').then(response => {
      setServices(response.data.services);
    });
  }, []);

  // CRUD operations
  const addService = (service: any) => {

    const file = (document as any).getElementById('inputGroupFile01').files;
    const formData = new FormData();

    formData.append('img', file[0]);
    formData.append('title', service.title);
    formData.append('desc', service.desc);

    axios.post('/api/services', formData).then(result => {
      setServices([...services, result.data.service]);
    });
  };

  const deleteService = (id: number) => {
    setEditing(false);

    axios.delete('/api/services/' + id).then(res => {
      setServices(services.filter(service => service['_id'] !== id));
    });
  };

  const updateService = (id: number, updatedService: any) => {
    setEditing(false);

    const file = (document as any).getElementById('inputGroupFile02').files;
    const formData = new FormData();

    formData.append('img', file[0]);
    formData.append('title', updatedService.title);
    formData.append('desc', updatedService.desc);

    axios.put('/api/services/' + id, formData).then(res => {
      setServices(services.map(service => (service['_id'] === id ? res.data.service : service)));
    });
  };

  const editRow = (service: any) => {
    setEditing(true);

    setCurrentService({ id: service._id, title: service.title, desc: service.desc, img: service.img });
  };

  return (
    <div className='container'>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h5>Edit Service</h5>
              <EditServiceForm
                editing={editing}
                setEditing={setEditing}
                currentService={currentService}
                updateService={updateService}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h5>Add Service</h5>
              <AddServiceForm addService={addService} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h5>View Services</h5>
          <ServiceTable services={services} editRow={editRow} deleteService={deleteService} />
        </div>
      </div>
    </div>
  );
};

export default Services;
