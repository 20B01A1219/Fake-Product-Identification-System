import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Instructions from './Components/Instructions';
import Register from './Components/Register';
import Login from './Components/Login';
import Manufacturer from './Components/Manufacturer';
import Profile from './Components/Profile';
import Productvalidation from './Components/Productvalidation';
import Addproduct from './Components/Addproduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/instructions' element = {<Instructions/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/manufacturer' element = {<Manufacturer/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/validateproduct" element = {<Productvalidation/>}/>
        <Route path = "addsingleproduct" element = {<Addproduct/>}/>
        <Route path = "/productvalidation" element = {<Productvalidation/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
