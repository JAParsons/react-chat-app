import React from 'react';
import firebase, { auth } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/firestore';
import 'firebase/auth';
import ChatRoom from './components/chat-room';
import './App.css';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header"></header>
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
}

const Login = () => {
  return <button onClick={() => {}}>Login with Google</button>;
};

const Logout = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Logout</button>
  );
};

export default App;
