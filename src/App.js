import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './component/navbar/Navbar';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import Alerts from './component/alerts/Alerts';
import Contract from './component/contract/Contract';



function App() {
  const [token, setToken] = useState({name: ""});
  const [error, setError] = useState("");

  // DEAL WITH AUTH DATA HERE & component/login
  const adminUser = {
    username: "admin",
    password: "adminadmin123"
  }

  if (!token.name) {
    return (
      <Login setToken={setToken} setError={setError} adminUser={adminUser} error={error} />
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setToken} setError={setError}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/alerts">
              <Alerts />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
