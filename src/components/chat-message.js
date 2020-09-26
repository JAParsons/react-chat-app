import React from 'react';

const ChatMessage = ({ message: { text, photoURL } }) => {
  return (
    <div>
      <img
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
      />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
