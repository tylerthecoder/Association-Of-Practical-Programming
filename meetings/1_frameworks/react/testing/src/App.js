import React, { Component } from 'react';
import './App.css';
import MessageBoard from "./components/message-board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MessageBoard
            board="main"
          ></MessageBoard>
        </header>
      </div>
    );
  }
}

export default App;
