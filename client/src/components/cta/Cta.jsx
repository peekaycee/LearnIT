import { useState } from 'react';
import SignUp from '../signUp/SignUp';
import './Cta.css';

// eslint-disable-next-line react/prop-types
const Cta = ({ blur, setBlur }) => {
  const [toggleSignupCard, setToggleSignupCard] = useState(false);

  return (
    <section className='call-to-action'>
      <div className='cta-content'>
        <p>
          Gain expertise in programming and digital skills with competent and
          experienced tutors, and progress at your own pace.
        </p>
        <button
            type='button'
            onClick={() => {
              setToggleSignupCard(true);
              blur? null : setBlur(!blur) ;
            }}>
            Register Now!
          </button>
      </div>
      {toggleSignupCard && (
        <SignUp onClose={() => (setToggleSignupCard(true))}/>
      )}
    </section>
  );
};

export default Cta;
