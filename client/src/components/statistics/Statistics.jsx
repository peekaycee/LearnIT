import { blog05 } from '../../assets/index';
import './statistics.css';

const Statistics = () => {
  return (
    <section className='statistics__container'>
      <div className='stats__header'>
        <h2>Achievements</h2>
      </div>
      <div className='stats__content'>
        <div className='stats__content-image'>
          <img src={blog05} alt='' />
        </div>
        <article className='stats__content-data'>
          <div className='content__data'>
            <div className='data'>
              <p>1</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                ex optio magnam sapiente ad consequuntur repellat temporibus ut?
                Aperiam, quibusdam?
              </p>
            </div>
            <div className='data'>
              <p>2+</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                ex optio magnam sapiente ad consequuntur repellat temporibus ut?
                Aperiam, quibusdam?
              </p>
            </div>
          </div>
          <div className='content__data'>
            <div className='data'>
              <p>3+</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                ex optio magnam sapiente ad consequuntur repellat temporibus ut?
                Aperiam, quibusdam?
              </p>
            </div>
            <div className='data'>
              <p>4</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                ex optio magnam sapiente ad consequuntur repellat temporibus ut?
                Aperiam, quibusdam?
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Statistics;
