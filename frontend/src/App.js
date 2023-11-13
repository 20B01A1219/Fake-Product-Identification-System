import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Instructions from './Components/Instructions';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/instructions' element = {<Instructions/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
