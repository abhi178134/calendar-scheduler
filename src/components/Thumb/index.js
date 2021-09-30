import React from 'react';
import { Link } from 'react-router-dom';
import {Wrapper,Content} from './Thumb.styles'

const Thumb = ({docID,data}) =>{
    // console.log(docID,"1",title,"2",text,"3",duration,"4",date);
    const details = JSON.parse(data);

return (
    <div>
        <Wrapper>
        <li>
        <Link to={`/${docID}`} style={{ textDecoration: 'none' }}>
                <h3>{details.title}</h3>
        </Link>
        
            <Content>
                {console.log(details)}
                {details.desc}
                <br/>
                {details.duration}
                <br/>
                {new Date(details.date.seconds * 1000).toLocaleDateString("en-US")}
            </Content>
        </li>
        <hr/>
        </Wrapper>
    </div>
)};

export default Thumb;
