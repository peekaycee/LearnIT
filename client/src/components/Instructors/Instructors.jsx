import './Instructors.css'

function Instructors() {
  return (
    <section className="instructors-container">
      <h2>Your Tutors</h2>
       <div className="cards">
        <div className="card">
            <img src={'#'} alt="Instructor's Image 1" />
            <div className='card-text'>
                <p>card text 1</p>
            </div>
        </div>
        <div className="card">
            <img src={'#'} alt="Instructor's Image 2" />
            <div className='card-text'>
                <p>card text 2</p>
            </div>
        </div>
        <div className="card">
            <img src={'#'} alt="Instructor's Image 3" />
            <div className='card-text'>
                <p>card text 3</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Instructors
