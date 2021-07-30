import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './component/navbar/Navbar';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import Alerts from './component/alerts/Alerts';
import Contract from './component/contract/Contract';
import Register from './component/register/Register';
import Lostpswd from './component/lostpswd/Lostpswd';
import Terms from './component/terms&conditions/Terms';
import Test from './component/test/Test';
import TestPost from './component/test/TestPost';
import TestGet from './component/test/TestGet';



function App() {
  const [token, setToken] = useState({name: ""});
  const [error, setError] = useState("");


  // DEAL WITH AUTH DATA HERE & component/login
  const adminUser = {
    email: "admin@admin.com",
    username: "admin",
    password: "adminadmin123"
  }

  if (!token.name) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/lostpswd">
              <Lostpswd adminUser={adminUser} />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/testpost">
              <TestPost />
            </Route>
            <Route path="/testget">
              <TestGet />
            </Route>
            <Route path="/">
              <Login setToken={setToken} setError={setError} adminUser={adminUser} error={error} />
            </Route>
          </Switch>
        </div>
      </Router>
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
