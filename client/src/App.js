//
//
import React, { Component } from 'react';

import axios from 'axios';

export default class App extends Component {
  //
  state = {
    cars: []
  };

  componentDidMount() {
    axios.get('/api/getcars').then(response => {
      console.log(response.data);
    });
    // axios.get('/api/users').then(response => {
    //   console.log(response.data);
    // });
  }

  onCarSubmit = () => {
    axios
      .post('/api/addcar', {
        brand: 'Ford',
        model: 'Focus',
        year: 2018,
        avail: true
      })
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Add Car</h1>
        <button onClick={() => this.onCarSubmit()}>Add car to db</button>
        <hr />
        {this.state.cars.map((car, index) => (
          <div key={index}> - {car.brand}</div>
        ))}
      </div>
    );
  }
}
