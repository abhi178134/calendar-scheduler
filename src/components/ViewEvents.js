import React,{useEffect} from "react";
import { collection, query, where, getDocs  } from "firebase/firestore";
import {db} from '../firebase/config';

const View = () => {
  useEffect (()=> {
    handleData();
  },[]);
  const  handleData = async() => {
    console.log("Printing ...");
    try{

        const q = query(collection(db, "users"),where("email","==","abhijeet178134@gmail.com"));
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          console.log(doc.id," =>" , doc.data());          
        });
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}
return (
  <h1>Hello</h1>
  );
}

export default View;
