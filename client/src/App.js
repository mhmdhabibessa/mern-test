import logo from './logo.svg';
import './App.css'
import Main from './Main'
import { Routes, Route } from 'react-router-dom';
import UpdateForm from './components/UpdateForm'
import { useState,useEffect } from 'react';
import io from 'socket.io-client';
function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    socket.on('Hello Essa', data => {
      console.log('Received Hello Essa event with data:', data);
    });
    socket.emit('Welcome', { message: 'Hello Server' });

    // console.log('Is this running?');
    // socket.on('Welcome', data => console.log(data));
    return () => socket.removeAllListeners;
  }, [socket]);
  return (
    <>
      <div className="App">

        <Routes>
          <Route element={<Main />} path="/users/" />
          <Route element={<UpdateForm />} path="/user/:id/edit" />
        </Routes>
      </div>
    </>

  );
}

export default App;
