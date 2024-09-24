import {
  Hero,
  About,
  Features,
  Statistics,
  Instructors,
  Cta,
  // Testimonials,
  // Benefits,
  // Newsletter,
  // Contact,
} from '../../components/index.js';
import './homepage.css';

// eslint-disable-next-line react/prop-types
const Homepage = ({blur, setBlur}) => {
  
  return (
    <>
      <main className='main__container' id={blur? 'blur': ''}>
        <Hero />
        <About />
        <Features />
        <Statistics />
        <Instructors />
        <Cta blur={blur} setBlur={setBlur} />
        {/* 
          <Testimonials />
          <Benefits/>
          <Newsletter/>
          <Contact/>
          */}
      </main>
    </>
  );
};

export default Homepage;
