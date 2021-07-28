import './Register.css'
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Register = () => {
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [adress, setAdress] = useState('');


    const handleSubmit = () => {
        console.log('submitted !')
        history.push('/');
    }

    return ( 
        <div className="create">
        <h2>REGISTER</h2>
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
            <label><input type="checkbox"/> I agree to the terms & conditions</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
     );
}
 
export default Register;