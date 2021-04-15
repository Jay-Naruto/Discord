import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { login, selectUser,logout } from './features/counter/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
const dispatch=useDispatch()
const user = useSelector(selectUser)

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    console.log('user is', authUser);
    if (authUser) {
      // the user is logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        displayName: authUser.displayName,
      }))
    } else {
      dispatch(logout());
      // the user is logged out
    }
  })
}, [dispatch])
  return (
    <div className="App">
      {
        user ? (
          <>
          {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />

          </>
        ) :
        (
          <>
          <Login />
          </>
        )
      }

      
    </div>
  );
}

export default App;
