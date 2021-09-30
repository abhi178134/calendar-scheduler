import {useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Logout = () =>{
  const navigate = useNavigate();
  const auth = getAuth();
  
  signOut(auth).then(() => {
    navigate('/login');    
  }).catch((error) => {
    console.log(error);
  });

  return(
    <h1>Logout Successful!!</h1>
  )

}

export default Logout;
