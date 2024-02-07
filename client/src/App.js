import { Navbar, Footer, Header, About, Library, Contact, Courses } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Contact />
      <Courses />
      <Library />
      <About />
      <Footer />
    </div>
  );
};

export default App;
