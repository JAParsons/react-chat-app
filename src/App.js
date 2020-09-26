import React from 'react';
import ChatRoom from './components/chat-room';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './auth/firebase';
import './App.css';

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <div className="app-header">
        <Logout />
      </div>
      <div className="app-body">{user ? <ChatRoom /> : <Login />}</div>
    </div>
  );
};

const Login = () => {
  const loginWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <button className="login" onClick={loginWithGoogle}>
      Login with Google
    </button>
  );
};

const Logout = () => {
  return (
    auth.currentUser && (
      <button className="login" onClick={() => auth.signOut()}>
        Logout
      </button>
    )
  );
};

export default App;
