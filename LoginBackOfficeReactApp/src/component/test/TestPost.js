import './Test.css';
import { useState } from 'react';

const TestPost = () => {
    const serverAdress = 'https://kibaro-authentication-svc-cgqlclia4q-nw.a.run.app';
    const postAdress = '/v1/registration/users';

    const email = "xivat15466@flipssl.com"
    const password = "Testpassword1!"

    const [token, setToken] = useState('');

    const handleClick = (e) => {
        console.log(token);
        e.preventDefault();
        const user = { 
            email: email,
            password: password }
    
        fetch(serverAdress + postAdress, {
          method: 'POST',
          headers: { 
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token },
          body: JSON.stringify(user)
        })
        .then((response) => console.log(response))
      }

    return ( 
        <div className="test">
            <h1>TEST POST PAGE</h1>
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
            <button onClick={handleClick}>LOG RESPONSE</button>
        </div>
     );
}
 
export default TestPost;