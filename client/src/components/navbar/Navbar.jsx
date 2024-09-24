import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';

const Menu = () => (
  <>
    <p>
      <Link to='/'>Home</Link>
    </p>
    <p>
      <a href='#about'>About</a>
    </p>
    <p>Explore</p>
    <p>
      <a href='#contact'>Contact</a>
    </p>
    <p>
      <Link to='/courses'>Courses</Link>
    </p>
    <p>
      <Link to='/library'>Library</Link>
    </p>
  </>
);

// eslint-disable-next-line react/prop-types
const Navbar = ({blur, setBlur}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSigninCard, setToggleSigninCard] = useState(false);
  const [toggleSignupCard, setToggleSignupCard] = useState(false);

  useEffect(() => {
    const addNavbar = () => {
      navbarElement.classList.add('gradient__bg');
    };

    const remNavbar = () => {
      navbarElement.classList.remove('gradient__bg');
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop;
      if (scrollHeight >= 118) {
        addNavbar();
      } else {
        remNavbar();
      }
    };

    const navbarElement = document.querySelector('.lms__navbar');
    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='lms__navbar'>
        <div className='lms__navbar-links'>
          <div className='lms__navbar-links_logo'>
            <Link to='/'>
              <h1 className='logo'>
                HC|<span>A</span>
              </h1>
            </Link>
          </div>
          <div className='lms__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='lms__navbar-sign'>
          <p
            onClick={() => {
              setToggleSigninCard(true);
              setToggleSignupCard(false);
              blur? null : setBlur(!blur) ;
            }}>
            Log in
          </p>
          <button
            type='button'
            onClick={() => {
              setToggleSignupCard(true);
              setToggleSigninCard(false);
              blur? null : setBlur(!blur) ;
            }}>
            Sign up
          </button>
        </div>
        <div className='lms__navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='lms__navbar-menu_container scale-up-center'>
              <div className='lms__navbar-menu_container-links'>
                <Menu />
              </div>
              <div className='lms__navbar-menu_container-links-sign lms__navbar-sign'>
                <p
                  onClick={() => {
                    setToggleSigninCard(true);
                    setToggleSignupCard(false);
                    blur? null : setBlur(!blur) ;
                  }}>
                  Log in
                </p>
                <button
                  type='button'
                  onClick={() => {
                    setToggleSignupCard(true);
                    setToggleSigninCard(false);
                    blur? null : setBlur(!blur) ;
                  }}>
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {toggleSigninCard && (
        <SignIn onClose={() => (setToggleSigninCard(false), setBlur(''))} />
      )}
      {toggleSignupCard && (
        <SignUp onClose={() => (setToggleSignupCard(false), setBlur(''))} />
      )}
    </>
  );
};

export default Navbar;
