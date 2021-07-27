import type { GetStaticProps, GetStaticPropsContext } from 'next'

import { DB_URL } from '../assets/utils/api/dbUrl'
import Welcome from '../components/welcome'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Blog, { BlogEntry } from '../components/blog'
import Contact from '../components/contact'


type IndexProps = {
  blogEntries: BlogEntry[],
}


const Home = (props: IndexProps) => {
  return (
    <div>
      <Welcome />

      <About />

      <Portfolio />

      <Blog blogEntries={props.blogEntries} />

      <Contact />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const blogEntries: object[] = await fetch(`${DB_URL}/blog_entries`, {
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json())

  return {
    props: {
      blogEntries,
    },
  }
}

export default Home
