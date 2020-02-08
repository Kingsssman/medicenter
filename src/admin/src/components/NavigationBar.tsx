import React from "react";

const NavigationBar = (props:any) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <a className="item">Doctors</a>
        <a className="item">Servcies</a>
        <div className="right menu">
          <a className="item">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
