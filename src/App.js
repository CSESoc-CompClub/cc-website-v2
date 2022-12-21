import './styles.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrolltoTop from './components/ScrolltoTop'

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Header />
        <ScrolltoTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/events' element={<Events />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/error' element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </ScrolltoTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
