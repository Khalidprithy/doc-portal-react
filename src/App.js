import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Appointment from './components/Pages/Appointment/Appointment';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Login from './components/LoginAuth/Login/Login';
import Review from './components/Pages/Reviews/Review';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
        <Route path='/review' element={<Review></Review>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
