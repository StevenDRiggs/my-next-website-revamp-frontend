import Welcome from '../components/welcome'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Blog from '../components/blog'
import Contact from '../components/contact'


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

      <Contact />
    </div>
  )
}


export default Home
