import { Homepage, AboutUs, Library, Courses, ErrorPage } from './containers';
import { Navbar, Footer } from './components';
import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [blur, setBlur] = useState(false);
  return (
    <div className='App'>
      <Navbar blur={blur} setBlur={setBlur} />
      <Routes>
        {/* recall to put an id==about statement in every container and the aboutUs link */}
        <Route path='/' element={<Homepage blur={blur} setBlur={setBlur} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/library' element={<Library />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
