import './Register.css'
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";



const Register = () => {
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [adress, setAdress] = useState('');

    const [message, setMessage] = useState('');


    const handleSubmit = ( e ) => {
      e.preventDefault();
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        companyName: companyName,
        adress: adress
      }
      setMessage('Thank you for your registration !')
      console.log(data)
      // simulate server delay
      setTimeout(() => {history.push('/');}, 3000);
    }

    return ( 
        <div className="create">
        <h1>REGISTER</h1>
        <br/>
        <h3 className="response-message">{message}</h3>
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
}
 
export default Register;