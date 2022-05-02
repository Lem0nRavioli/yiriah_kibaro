import './Lostpswd.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Lostpswd = ( {adminUser} ) => {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (adminUser.email === email) { 
            setResponseMessage('An email have been sent to you');
            setErrorMessage('');
            
        } else { 
            setErrorMessage('This email is not registered');
            setResponseMessage('');
        }
    }

    return ( 
        <div className="lostpswd-wrapper">
            <h1>Forgot password ?</h1>
            <br/>
            <div>
                <h3 className="response-message">{responseMessage}</h3>
                <h3 className="error">{errorMessage}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input 
                        type="email"
                        required
                        placeholder={"Email"}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="nologs">
                <Link to="/">Log In</Link>
                <Link to="register">No account yet</Link>
            </div>
            
        </div>
     );
}
 
export default Lostpswd;