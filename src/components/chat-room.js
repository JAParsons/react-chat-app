import React, { useState } from 'react';
import firebase from '../auth/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './chat-message';

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {
  const messageCollection = firestore.collection('messages');
  const GET_MESSAGES = messageCollection.orderBy('createdAt').limit(32);

  const [messages] = useCollectionData(GET_MESSAGES, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageCollection.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
  };

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Aa"
        />
        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
