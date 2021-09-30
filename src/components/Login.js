import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import app from '../firebase/config.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    navigate('/');    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.code);
  });
  };

  return (
    <Form className="form-style">
      <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
              Login To Calender-Scheduler
            </h2>
          </Col>
        </Row>

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

      <Col xs={{span: 3, offset:4}}>
      <Button className="btn-started" onClick={handleLogin} type="submit">
        Login
      </Button>
      </Col>
    </Form>
  );
}

export default Login;
