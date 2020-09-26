import { firestore } from 'firebase';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {
  const GET_MESSAGES = firestore
    .CollectionReference('messages')
    .orderB('createdAt')
    .limit(32);

  const [messages] = useCollectionData(GET_MESSAGES, { idField: 'id' });

  return <div></div>;
};

export default ChatRoom;
