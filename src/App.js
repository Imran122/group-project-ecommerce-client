import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home> </Home>}/>
          <Route path='/home' element={<Home> </Home>}/>
          <Route path="/product/:Id" element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> 
    </div>
  ); 
}

export default App;
