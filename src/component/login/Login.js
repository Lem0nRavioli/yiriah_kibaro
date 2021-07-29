import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ( {setToken, setError, adminUser, error} ) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const LogUser = details => {
        if (details.username === username && details.password === password) {
          setToken({name: details.username});
        } else {
          setError("Invalid user or password");
        }
      }

    const handleSubmit = e => {
        e.preventDefault();
        LogUser(adminUser)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <br/>
            <h3 className="error">{error}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input 
                        type="text"
                        placeholder={"Username"}
                        onChange={e => setUserName(e.target.value)}
                        value={username}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input 
                        type="password"
                        placeholder={"Password"}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="nologs">
                <Link to="register">No account yet</Link>
                <Link to="lostpswd">Forgot password</Link>
            </div>
            
        </div>
     );
}
 
export default Login;

