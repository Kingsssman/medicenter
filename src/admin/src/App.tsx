import React, { Component } from 'react';
import axios from 'axios';
import NavigationBar from './components/NavigationBar';
import ServiceList from './components/ServiceList';

class App extends Component {
  state = { services: [] };

  async componentDidMount() {
    const response = await axios.get('/api/services');

    this.setState({ services: response.data.services });
  }

  handleDelete = (itemId: any) => {
    const services = this.state.services.filter((item: any) => item._id !== itemId);
    
    this.setState({ services: services });
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <ServiceList services={this.state.services} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
