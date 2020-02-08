import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = (props: any) => {
  const services = props.services.map((el: any) => (
    <ServiceItem key={el._id} element={el} onDelete={props.onDelete} />
  ));

  return <div>{services}</div>;
};

export default ServiceList;
