import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateObject from 'react-date-object';


const Home = () => {
    const auth = getAuth();
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    const [date,setDate] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState();
    const onDateChange = (date) => {
        setDate(date);
        var formattedDate = new DateObject(date); 
        setSelectedDate(formattedDate.format());
    };

    onAuthStateChanged(auth, (user) => {
    if (user) {
        const  mail = user.email;
        setEmail(mail);
    }
    else{
        // setUid("NoUser");
        // navigate('/login');
    }
    });
    
    return(
        <>
        <h1>Welcome To Calendar</h1>
        </>
    );
};

export default Home;
