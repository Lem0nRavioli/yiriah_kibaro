import './Test.css';
import useFetch from '../../fetch/useFetch';
import { useState } from 'react';

const Test = () => {
    const [adress, setAdress] = useState('');
    const { error, isPending, data } = useFetch(adress) // add fetch adress here

    const handleClick = () => {
        console.log(data);
        console.log(adress)
        if (data){
            console.log(data.data.AccessToken);
        }        
    }

    return ( 
        <div className="test">
            <h1>TEST PAGE</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && <div> Data Ready </div> }
            <div>
                <label>
                    <p>Adress</p>
                    <input 
                        type="text"
                        placeholder={"Adress"}
                        onChange={e => setAdress(e.target.value)}
                        value={adress}
                    />
                </label>
                </div>
            <button onClick={handleClick}>LOG DATA</button>
        </div>
     );
}
 
export default Test;