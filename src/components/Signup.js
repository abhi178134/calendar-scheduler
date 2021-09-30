import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import app from '../firebase/config.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error,setError] = useState(false);
  const [errorMsg,setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      confirmPassword
    };
    const auth = getAuth();
    if (password === confirmPassword)
    {
      setError(false);
      setErrorMessage("");
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        navigate('/'); 
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/invalid-email')
        {         
          setError(true);
          setErrorMessage('Invalid Email !!');
        }
        else if(errorCode==='auth/email-already-in-use')
        {
          setError(true);
          setErrorMessage('Email Already in use !!');
        }
        else if(errorCode === 'auth/weak-password')
        {
          setError(true);
          setErrorMessage("Password too short !!");
        }
        else 
        {
          setError(true);
          setErrorMessage(errorCode);
        }
      })
    }
    else
    {
      setError(true);
      setErrorMessage("Passwords do not match");
    }

  };
  return (
    error
    ?
    <Form className="form-style">
      <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
            SignUp To Calender-Scheduler
            </h2>
            <h3>{errorMsg}</h3>
          </Col>
        </Row>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Name</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Email</Form.Label>
      </Col>
      <Col xs="6">
      <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="example@email.com" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Password</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      <Row>
      <Col xs="4">
        <Form.Label>Confirm Password</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
      </Col>
      </Row>
      </Form.Group>
      <Form.Group>
      </Form.Group>
      <Col xs={{span: 3, offset:4}}>
      <Button className="btn-started" onClick={handleSignup} variant="primary" type="submit">
        Signup
      </Button>
      </Col>
    </Form>
    :

    <Form className="form-style">
    <Row className="mb-5 mt-5">
        <Col className="text-center">
          <h2>
          SignUp To Calender-Scheduler
          </h2>
        </Col>
      </Row>
    <Form.Group controlId="">
    <Row>
    <Col xs={{span: 4}} >
      <Form.Label>Name</Form.Label>
    </Col>
    <Col xs={{span: 6}}>
      <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
    </Col>
    </Row>
    </Form.Group>

    <Form.Group>
    <Row>
    <Col xs="4">
      <Form.Label>Email</Form.Label>
    </Col>
    <Col xs="6">
    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="example@email.com" />
    </Col>
    </Row>
    </Form.Group>
    <Form.Group>
    <Row>
    <Col xs="4">
      <Form.Label>Password</Form.Label>
    </Col>
    <Col xs="6">
      <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
    </Col>
    </Row>
    </Form.Group>
    <Form.Group>
    <Row>
    <Col xs="4">
      <Form.Label>Confirm Password</Form.Label>
    </Col>
    <Col xs="6">
      <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
    </Col>
    </Row>
    </Form.Group>
    <Col xs={{span: 3, offset:4}}>
    <Button className="btn-started" onClick={handleSignup} variant="primary" type="submit">
      Signup
    </Button>
    </Col>
  </Form>
  );


}

export default Signup;
