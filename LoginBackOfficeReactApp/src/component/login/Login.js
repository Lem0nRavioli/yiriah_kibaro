import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ( {token, setUserToken, serverAdress} ) => {
    const endpoint = '/v1/authentication/users/';
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const LogUser = details => {
        const adress = serverAdress + endpoint + details.username + '/' + details.password

        fetch(adress, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token },
          })
          .then(res => {
              if (!res.ok) { // error coming back from server
                  throw Error('INVALID USER');
              } 
              return res.json();
            })
          // .then((response) => response.json())
          .then(data => {
              // DEFINE VALID USER HERE
              console.log(data.data.userId);
              console.log(data);
              setUserToken(data);
          })
          .catch(err => {
              // DEFINE INVALID USER/PASS RESPONSE HERE
              setError('Invalid user or password.');
            //   console.log(err.message)
          })
      }

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        LogUser(user)
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
                    <button type="submit">Log In</button>
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

