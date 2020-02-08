import React from "react";

const ServiceItem = (props: any) => {
  return (
    <div className='ui card'>
      <div className='image'>
        <img src={props.element.img} />
      </div>
      <div className='content'>
        <div className='header'>{props.element.title}</div>
        <div className='description'>{props.element.desc}</div>
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic yellow button'>Edit</div>
          <div className='ui basic red button' onClick={() => props.onDelete(props.element._id)}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
