import React from 'react';
import firebase from '../auth/firebase';

const auth = firebase.auth();

const ChatMessage = ({ message: { text, uid, photoURL } }) => {
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || null} />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
