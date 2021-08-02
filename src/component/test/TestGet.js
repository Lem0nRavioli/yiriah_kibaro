import './Test.css';
import { useState } from 'react';

const TestGet = () => {
    const serverAdress = 'https://kibaro-authentication-svc-cgqlclia4q-nw.a.run.app';
    // const postAdress = '/v1/registration/users/confirmation/';
    const postAdress = '/v1/kibaro/reports';

    // const email = "licafiy447@hyprhost.com";
    // const password = "Testpassword1!";

    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const adress = serverAdress + postAdress
    
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
            console.log(data)
        })
        .catch(err => {
            // DEFINE INVALID USER/PASS RESPONSE HERE
            console.log(err.message)
        })
        
      }

    return ( 
        <div className="test">
            <h1>TEST GET PAGE</h1>
            <div>
                <label>
                    <p>Token</p>
                    <input 
                        type="text"
                        placeholder={"token"}
                        onChange={e => setToken(e.target.value)}
                        value={token}
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>Username</p>
                    <input 
                        type="text"
                        placeholder={"username"}
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>Code</p>
                    <input 
                        type="number"
                        placeholder={"code"}
                        onChange={e => setCode(e.target.value)}
                        value={code}
                    />
                </label>
            </div>
            <button onClick={handleClick}>LOG RESPONSE</button>
        </div>
     );
}
 
export default TestGet;