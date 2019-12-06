import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Players from './Components/Players/Players';
import DarkMode from './Components/useDarkMode';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res);
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log('data not returned');
      });
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Worlds Womens Cup
          </h1>
          <DarkMode />
          <Players players={this.state.players} />
        </header>
      </div>
    );
  }
}

export default App;