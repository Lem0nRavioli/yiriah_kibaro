import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import useFetch from './fetch/useFetch';
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

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const serverAdress = 'https://kibaro-authentication-svc-cgqlclia4q-nw.a.run.app';
  const {data} = useFetch('https://kibaro-authentication-svc-cgqlclia4q-nw.a.run.app/v1/authentication/oauth2/token/' + client_id + '/' + client_secret, '');
  const [userToken, setUserToken] = useState({});
  const [error, setError] = useState("");



  // DEAL WITH AUTH DATA HERE & component/login
  const adminUser = {
    email: "",
    username: "",
    password: ""
  }

  if (!userToken.status) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register">
              { !data && <div>Loading...</div> }
              { data && <Register tokenData={data.data.AccessToken} serverAdress={serverAdress}  /> }              
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
              { !data && <div>Loading...</div>}
              { data && <Login token={data.data.AccessToken} setUserToken={setUserToken} serverAdress={serverAdress} /> }
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setUserToken} setError={setError}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard serverAdress={serverAdress} userToken={userToken} />
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
