import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const NavBar = ({}) => {
    const auth = getAuth();
    const [email,setEmail] = useState('');
    const [authenticated,setAuthenticated] = useState(false); 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const  mail = user.email;
            setEmail(mail);
            setAuthenticated(true);
            console.log(email);
        }
        else{
            setEmail('');
            setAuthenticated(false);
            // setUid("NoUser");
            // navigate('/login');
        }
        });
  

  return (
    <Navbar className="nav-css" expand="lg">
      <Navbar.Brand as={Link} to="/">Calendar-Scheduler</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      {authenticated &&
        <>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/add">Add Event </Nav.Link>
          <Nav.Link as={Link} to="/view">View Event</Nav.Link>
        </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </>
        }
        {!authenticated &&
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );

}

export default NavBar;