import { Hero, About, Features, Statistics } from '../../components/index.js'
import './homepage.css'

const Homepage = () => {
  return (
    <>
      <main className='main__container'>
          <Hero />
          <About /> 
          <Features />
          <Statistics/>
      </main>
    </>
  )
}

export default Homepage