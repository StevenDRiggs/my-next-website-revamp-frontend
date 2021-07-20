import Welcome from '../components/welcome'
import About from '../components/about'


export type ComponentProps = {
  id: string,
}


const Home = () => {
  return (
    <div>
      <Welcome id='home' />

      <About id='about' />
    </div>
  )
}


export default Home
