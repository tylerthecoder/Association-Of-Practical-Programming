import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const messageStyle = {
  fontSize: "30px",
  borderBottom: "dotted 2px white",
  padding: "3px",
  margin: "0px",
}

const boardStyle = {
  border: "4px solid white",
  display: "inline-block",
  margin: "10px"
}

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
      messages.push(data.text);
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
      <div
        style={boardStyle}
      >
        { messages.map(message => (
          <p style={messageStyle}>
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
      </div>
    )
  }
}

export default MessageBoard;