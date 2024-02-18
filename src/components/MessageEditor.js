import React from 'react';

const MessageEditor = ({ value, onChange, onSubmit }) => (
  <div>
    <textarea value={value} onChange={onChange} />
    <button onClick={onSubmit} disabled={!value}>Submit</button>
  </div>
);

export default MessageEditor;
