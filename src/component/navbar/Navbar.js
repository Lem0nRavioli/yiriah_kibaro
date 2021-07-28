import './Navbar.css'
import logo from './kibaro_logo.jpg'
import { Link } from "react-router-dom"

const Navbar = ({ setToken, setError }) => {
    const Logout = () => {
        setToken({name: ""});
        setError("");
      }

    return ( 
        <nav className="navbar">
            <img src={logo} alt="" className="logo" />
            <h1>KIBARO - PRO</h1>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/alerts">Alerts</Link>
                <Link to="/contract">Contract</Link>
                <Link to="/" onClick={Logout}>Log Out</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;