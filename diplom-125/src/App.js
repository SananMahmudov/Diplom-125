import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Navbar/Navbar';
// MARSHRUT SISTEMI
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Events from './Pages/Events'
import Pages from './Pages/Pages'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import NotFound from './Pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <div className='wrapper'>
      <Navbar/>
      </div>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Pages" element={<Pages/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>

      </BrowserRouter>
      

  );
}

export default App;
