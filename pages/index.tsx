import { useState, useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

import { useAppDispatch } from '../redux/hooks'
import { changeCurrentPage } from '../redux/actions/navbarActions'
import { pageIds } from '../components/navbar'
import Welcome from '../components/welcome'
import About from '../components/about'


const Home = () => {
  const [ ref, setRef ] = useState(null)
  const { isIntersecting } = useIntersectionObserver(ref)
  const dispatch = useAppDispatch()

  const whichPage = () => {
    pageIds.forEach(pageId => {
      setRef(pageId)
      if (isIntersecting) {
        dispatch(
          changeCurrentPage({
            pageId,}
          )
        )

        return
      }
    })
  }

  return (
    <div>
      <Welcome />

      <About />
    </div>
  )
}


export default Home
