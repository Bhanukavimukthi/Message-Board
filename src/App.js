import React, { useState, useEffect } from 'react';
import ChannelList from './components/ChannelList';
import MessageList from './components/MessageList';
import MessageEditor from './components/MessageEditor';
import * as messageService from './services/MessageService';
import './App.css';

const App = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchChannels = async () => {
      const channels = await messageService.getChannels();
      setChannels(channels);
    };

    fetchChannels();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedChannel) {
        const messages = await messageService.getMessages(selectedChannel);
        setMessages(messages);
      }
    };

    fetchMessages();
  }, [selectedChannel]);

  const handleChannelSelect = channel => {
    setSelectedChannel(channel);
    setNewMessage('');
  };

  const handleSendMessage = async () => {
    // Create a temporary message with a temporary ID and optimistically add the temporary message to the local state
    const temporaryMessage = { id: Date.now(), body: newMessage };
    setMessages([...messages, temporaryMessage]);

    setNewMessage('');

    try {
      const createdMessage = await messageService.createMessage(selectedChannel, newMessage);

      // Replace the local state temporary message with the actual created message
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.id === temporaryMessage.id ? createdMessage : msg))
      );
    } catch (error) {
      // Remove the temporary message from the local state
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== temporaryMessage.id));
      console.error('Error sending message:', error);
    }
  }

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Message Board</h1>
        <ChannelList channels={channels} onSelect={handleChannelSelect} />
      </div>
      <div>
        <div className="msg-list">
          <MessageList messages={messages} />
        </div>
        {selectedChannel && (
          <div className="msg-editor">
            <MessageEditor
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onSubmit={handleSendMessage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
