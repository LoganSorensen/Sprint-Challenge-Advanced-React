import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/player-list';
import Header from './components/header';

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
          console.log(response)
          this.setState({players: response.data})
          // console.log("Current State", this.state.players)
      })
      .catch(error => {
          console.log("The data was not returned", error)
      })
  }
  

  render() {
    return (
      <div>
        <Header data-testid='header'/>
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}

export default App;
