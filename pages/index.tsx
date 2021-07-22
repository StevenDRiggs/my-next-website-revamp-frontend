import Welcome from '../components/welcome'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Blog from '../components/blog'


export type ComponentProps = {
  id: string,
}


const Home = () => {
  return (
    <div>
      <Welcome />

      <About />

      <Portfolio />

      <Blog />
    </div>
  )
}


export default Home
