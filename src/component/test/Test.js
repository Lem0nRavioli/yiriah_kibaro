import './Test.css';
import useFetch from '../../fetch/useFetch';

const Test = () => {
    const { error, isPending, data} = useFetch('') // add fetch adress here

    const handleClick = () => {
        console.log(data);
    }

    return ( 
        <div className="test">
            <h1>TEST PAGE</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && <div>Check console</div> }
            <button onClick={handleClick}>LOG DATA</button>
        </div>
     );
}
 
export default Test;