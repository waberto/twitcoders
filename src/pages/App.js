import React from 'react'
import '../styles/App.css'
import Header from './../components/Header';
import CreateMessage from './../components/CreateMessage';


import firebase, { FirebaseContext } from './../firebase';
import useAuth from './../hooks/useAuth';
import MessageList from './../components/MessageList';

const App = () => {
  const user = useAuth()
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <div className='app'>
        <Header />
        <CreateMessage />
        <MessageList />
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
