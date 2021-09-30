import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {Form, Row, Col, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateObject from 'react-date-object';

const AddEvent = () => {
    const auth = getAuth();
    const [email,setEmail] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDesc]=useState('');
    const [duration,setDuration] = useState(24);
    const [date, setDate] = useState(new Date());
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


    const handleDateChange = (date) => 
    {
      // console.log(date);
      // var formattedDate = new DateObject(date);
      setDate(date);
      console.log(date);
    }
    const handleShare = async (e) => {
        try {
          navigate('/view');
            const docRef = await addDoc(collection(db, "users"), {
              email,title,date,desc,duration
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

    return (
      <Form className="form-style">
        <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2>
            Add Event 
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

        <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Event Description</Form.Label>
            </Col>
            <Col xs="6">
              <Form.Control onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="Description" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col xs="4">
              <Form.Label>Event Date</Form.Label>
            </Col>
            <Col xs="8">
            <DatePicker selected={date} onChange={handleDateChange} />
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
export default AddEvent;