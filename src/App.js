import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import ContactUs from './pages/ContactUs'
import Resources from './pages/Resources'


function App() {
  return (
    <div className='body'>
      
      <BrowserRouter>
        <header className='header'>
          
          <Link to='/'>
            <img className='logo' src='compclub_logo.png'/>
          </Link>
          <Link className='nav' to='/aboutus'>About Us</Link>
          <Link className='nav' to='/events'>Events</Link>
          <Link className='nav' to='/resources'>Resources</Link>
          <Link className='nav' to='/contactus'>Contact Us</Link>
        </header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/resources' element={<Resources/>} />
        </Routes>
      </BrowserRouter>
      <footer className='footer'/>
    </div>
  );
}

export default App;
