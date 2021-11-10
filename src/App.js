import './App.css';
import {
  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
