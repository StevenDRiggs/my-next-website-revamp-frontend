import Welcome from '../components/welcome'
import About from '../components/about'
import Portfolio from '../components/portfolio'


export type ComponentProps = {
  id: string,
}


const Home = () => {
  return (
    <div>
      <Welcome />

      <About />

      <Portfolio />
    </div>
  )
}


export default Home
