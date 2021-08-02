import './Confirmation.css'
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Confirmation = ( {adress, username, token} ) => {
    const endpoint = '/v1/registration/users/confirmation/';
    const history = useHistory();
    const [code, setCode] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const getAdress = adress + endpoint + username + '/' + code;
        fetch(getAdress, {
          method: 'GET',
          headers: { 
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token },
        })
        .then((response) => {
            console.log(response);
            if(response.status === 200) {
                setError('');
                setSuccessMessage('Your registration has been completed !');                
                setTimeout(() => {history.push('/');}, 3000);
            } else {
                setSuccessMessage('');
                setError('Error' + response.status);
            }
        })
      }

    return ( 
        <div className="confirm">
            <h3 className="success">{successMessage}</h3>
            <h3 className="error">{error}</h3>
            <div>
                <p>Confirm your email with the code we just sent you please.</p>
                <p>Your email: {username}</p>
                <label>
                    <p>Validation code:</p>
                    <input 
                        type="number"
                        placeholder={"code"}
                        onChange={e => setCode(e.target.value)}
                        value={code}
                    />
                </label>
            </div>
            <button onClick={handleClick}>Submit</button>
        </div>
     );
}
 
export default Confirmation;