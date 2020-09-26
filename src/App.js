import React from 'react';
import ChatRoom from './components/chat-room';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './auth/firebase';
import './App.css';

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>React Chat App</h1>
      <Logout />
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
};

const Login = () => {
  const loginWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return <button onClick={loginWithGoogle}>Login with Google</button>;
};

const Logout = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Logout</button>
  );
};

export default App;
