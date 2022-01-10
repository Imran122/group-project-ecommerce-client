import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AllProducts from './components/AllProducts/AllProducts';
import NotFound from './components/NotFound/NotFound';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path='/allproducts' element={<AllProducts></AllProducts>}/>
                <Route path='/shipping' element={<Shipping />}/>
                <Route path="/product/:Id" element={<ServiceDetails />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
                    <Route exact path="/dashboard" element={<h3>Please select a topic.</h3>}></Route>
                    <Route path="/dashboard/myorders" element={<MyOrders></MyOrders>}></Route>
                </Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  ); 
}

export default App;
