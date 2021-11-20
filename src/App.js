import './App.css';
import {
  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Router>
        <Routes>
          <Route path="/appointment" element={<PrivateRoute><Appointment></Appointment></PrivateRoute>}>
          </Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
                    <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
                  </Route>
                  <Route path='/dashboard/payment/:appointmentId' element={<Payment></Payment>}>
                  </Route>
                  <Route path='/dashboard/makeAdmin' element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
                  </Route>
                  <Route path='/dashboard/addDoctor' element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}>
                  </Route>
          </Route>
          <Route path="/login" element={<Login></Login>}>
          </Route>
          <Route path="/register" element={<Register></Register>}>
          </Route>
          <Route path="/home" element={<Home></Home>}>
          </Route>
          <Route exact path="/" element={<Home></Home>}>
          </Route>
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
