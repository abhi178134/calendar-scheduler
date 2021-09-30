import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Logout from './components/Logout';
import NavBar from './components/Navbar';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import ViewEvents from './components/ViewEvents';

const App = () => {
  // const [apiResponse,setAPIResponse] = useState("");

  // useEffect(()=>{
    
  //     fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => setAPIResponse(res));
  // },[setAPIResponse]);

  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/add" element={<AddEvent/>} />
      <Route path="/update" element={<EditEvent/>} />
      <Route path="/view" element={<ViewEvents/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      </Routes>
    </Router>

  );
}

export default App;
