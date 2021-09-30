import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {Wrapper,Content} from './Thumb.styles'
import { Button } from 'react-bootstrap';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '.././../firebase/config'

// import DeleteEvent from '../DeleteEvent';
const Thumb = ({docID,data}) =>{
    // console.log(docID,"1",title,"2",text,"3",duration,"4",date);
    const details = JSON.parse(data);
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        var id = id.target.id;
        await deleteDoc(doc(db,"users",id));
        console.log("deleted");
        navigate('/');
        console.log(id);
    }

return (
    <div>
        <Wrapper>
        <li>
            <h4>{details.title}</h4>
            <Content>
            <Button id = {docID} className="btn-warning float-right" onClick={handleDelete} type="warning">
            Update
            </Button>
                {console.log(details)}
                {details.desc}
                <br/>
                {details.duration}
                <br/>
                <Button id = {docID} className="btn-danger float-right" onClick={handleDelete} type="danger">
            Delete
            </Button>
                {new Date(details.date.seconds * 1000).toLocaleDateString("en-US")}
            </Content>
        </li>
        <hr/>
        </Wrapper>
    </div>
)};

export default Thumb;
