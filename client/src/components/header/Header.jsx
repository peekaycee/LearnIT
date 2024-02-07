import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = (props) => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consect worked!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          doloribus facilis minima exercitationem recusandae.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='input' placeholder='choose a course' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600 people requested access</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
};

export default Header;
