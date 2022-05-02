import './Register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from '../../fetch/useFetch';
import Confirmation from './Confirmation';



const Register = ( {token, serverAdress} ) => {
    // const history = useHistory();
    const postAdress = '/v1/registration/users';

    const [isSubmit, setIsSubmit] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // temporary unused informations
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');    
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [adress, setAdress] = useState('');
    

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = ( e ) => {
      e.preventDefault();
      const user = {
        email: email,
        password: password,
        // firstName: firstName,
        // lastName: lastName,
        // phone: phone,
        // companyName: companyName,
        // adress: adress
      }

      fetch(serverAdress + postAdress, {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token },
        body: JSON.stringify(user)
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setSuccessMessage('An email has been sent to confirm your registration');
          setTimeout(() => {setIsSubmit(true);}, 3000);
      } else {
          setErrorMessage('An error occured');
          }
        }
      )    
    }

    if(!isSubmit) {
      return ( 
          <div className="create">
          <h1>REGISTER</h1>
          <br/>
          <h3 className="response-message">{successMessage}</h3>
          <h3 className="error">{errorMessage}</h3>
          <form onSubmit={handleSubmit}>
          <div className="fields">
            <div>
                <input 
                  type="text" 
                  required 
                  placeholder={"First name"}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                  type="text" 
                  required 
                  placeholder={"Last name"}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  required 
                  placeholder={"E-mail"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="tel" 
                  required 
                  placeholder={"Phone number"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input 
                  type="text" 
                  required 
                  placeholder={"Company"}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input 
                  type="text" 
                  required 
                  placeholder={"Adress"}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <div>
                <input 
                  type="txt" 
                  required 
                  placeholder={"Password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="conditions">
              <Link to="/terms" target="_blank">Terms & conditions</Link>
              <label><input required type="checkbox"/> I agree to the terms & conditions</label>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="nologs">
                  <Link to="/">Log In</Link>
                  <Link to="/lostpswd">Forgot password</Link>
          </div>
        </div>
      );
    } else {
      return ( 
        <Confirmation adress={serverAdress} username={email} token={token} />
       )
    }
}
 
export default Register;