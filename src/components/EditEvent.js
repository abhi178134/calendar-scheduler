import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {Form, Row, Col, Button} from 'react-bootstrap';
// import DatePicker from 'react-bootstrap-date-picker';

const EditEvent = () => {
    const auth = getAuth();
    const [email,setEmail] = useState('');
    const [title,setTitle] = useState('');
    const [time,setTime] = useState();
    const [duration,setDuration] = useState();
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
      if (user) {
          const  mail = user.email;
          setEmail(mail);
      }
      else{
          // setEmail("");
          // navigate('/login');
      }
      });




    const  handleShare = async (e) => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              email: {email},
              title: {title},
              time: {time},
              duration: {duration}
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return (
      <Form classname="form-style">
        <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
            Update Event 
            </h2>
          </Col>
        </Row>
        <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Event Title</Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" />
            </Col>
          </Row>
        </Form.Group>
        {/* <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Event Title</Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control onChange={(e)=>set(e.target.value)} type="text" placeholder="Title" />
            </Col>
          </Row>
        </Form.Group> */}
        <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Start Time</Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control onChange={(e)=>setTime(e.target.value)} type="text" placeholder="Time" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Duration </Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control onChange={(e)=>setDuration(e.target.value)} type="number" placeholder="Duration in hrs" />
            </Col>
          </Row>
        </Form.Group>
        <Row className="mb-5 mt-5">
          <Col className="text-center">
            <Button className="btn-started" onClick={handleShare} type="submit">
            Share
            </Button>
          </Col>
        </Row>
      </Form>

    )
}
export default EditEvent;