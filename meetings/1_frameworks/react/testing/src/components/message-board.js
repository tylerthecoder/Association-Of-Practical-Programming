import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
    }
    this.setUpSockets.bind(this);
    this.receiveMessage.bind(this);
    this.setUpSockets();
  }


  setUpSockets() {
    this.socket = openSocket('http://api.tgt101.com:4444');
    const { board } = this.props;
    this.socket.emit('getAllMessages', board);
    this.socket.on('allMessages', (data) => {
      console.log(data);
      const boardMess = data
        .filter(m => m.board === board)
        .map(m => m.text);
      this.setState({
        messages: boardMess,
      })
    });
    this.socket.on('message', (data) => {
      this.receiveMessage(data);
    })
  }

  receiveMessage(data) {
    const { board } = this.props;
    const { messages } = this.state;
    if (data.board === board) {
      console.log("Made")
      messages.push(data.text);
      console.log(messages);
      this.setState({
        messages,
      })
    }
  }

  sendMessage() {
    const { text } = this.state;
    const { board } = this.props;
    this.socket.emit("newMessage", {
      text,
      board,
    });
    this.setState({ text: "" })
  }

  typeMessage(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { messages, text } = this.state;
    return (
      <h1>
        <p> Hello </p>
        { messages.map(message => (
          <p>
            { message }
          </p>
        )) }
        <input
          type="text"
          value={text}
          onChange={(event) => this.typeMessage(event)}
        />
        <button
          onClick={() => this.sendMessage()}
        >
          Send Message
        </button>
      </h1>
    )
  }
}

export default MessageBoard;