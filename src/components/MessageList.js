import React from 'react';

const MessageList = ({ messages }) => (
  <div>
    <h2>Messages</h2>
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.body}</li>
      ))}
    </ul>
  </div>
);

export default MessageList;
