import React,{useEffect,useState} from "react";
import { collection, query, where, getDocs  } from "firebase/firestore";
import {db} from '../firebase/config';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';

const View = () => {
  const [res,setRes] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect (()=> {
    handleData();
  },[]);
  
  const  handleData = async() => {
    try{
      setLoading(true);
        const q = query(collection(db, "users"),where("email","==","abhijeet178134@gmail.com"));
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          var newObj = {
            "id":doc.id,
            "data":JSON.stringify(doc.data())
          }
          setRes(res=>[...res,newObj]);
      });
      setLoading(false);
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}

return (
  <>
  <Grid header = 'Events'>
  <ol>
       {!loading && res.map(doc =>
        <Thumb 
        key = {doc.id}
        docID = {doc.id}
        data = {doc.data}
        />
      )}
  </ol>
  </Grid>
  {loading && <Spinner/>}
  </>
  );
}

export default View;

//Features to add
//Add Grid for all the available events along with two buttons Update & Delete 
// Update will take back to prefilled form where user can update existing event
// Delete pop up a warning & then deletes accordingly....