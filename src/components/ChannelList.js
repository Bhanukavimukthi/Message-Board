import React from 'react';

const ChannelList = ({ channels, onSelect }) => (
  <div>
    <h2>Channels</h2>
    <ul>
      {channels.map(channel => (
        <li key={channel} onClick={() => onSelect(channel)}>{channel}</li>
      ))}
    </ul>
  </div>
);

export default ChannelList;
