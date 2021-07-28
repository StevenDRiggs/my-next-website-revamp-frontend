import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIntersectionObserver from '@react-hook/intersection-observer'

import type { SyntheticEvent } from 'react'

import styles from '../styles/Navbar.module.scss'


const pageIds = [
  'home',
  'about',
  'portfolio',
  'blog',
  'contact',
]

const intersectionThreshold = 0.4


const Navbar = () => {
  let isIntersecting
  const router = useRouter()

  const [ homeDivRef, setHomeDivRef ] = useState()
  const homeIsIntersecting = useIntersectionObserver(homeDivRef, {threshold: intersectionThreshold})['isIntersecting']

  const [ aboutDivRef, setAboutDivRef ] = useState()
  const aboutIsIntersecting = useIntersectionObserver(aboutDivRef, {threshold: intersectionThreshold})['isIntersecting']

  const [ portfolioDivRef, setPortfolioDivRef ] = useState()
  const portfolioIsIntersecting = useIntersectionObserver(portfolioDivRef, {threshold: intersectionThreshold})['isIntersecting']

  const [ blogDivRef, setBlogDivRef ] = useState()
  const blogIsIntersecting = useIntersectionObserver(blogDivRef, {threshold: intersectionThreshold})['isIntersecting']

  const [ contactDivRef, setContactDivRef ] = useState()
  const contactIsIntersecting = useIntersectionObserver(contactDivRef, {threshold: intersectionThreshold})['isIntersecting']

  const newActiveNavlink = () => {
    const navlinks = Array.from(document.querySelectorAll(`.${styles.navlink}`))
    navlinks.forEach(navlink => {
      navlink.classList.remove(styles.activeLink)
    })

    pageIds.forEach((pageId: string) => {
      if (eval(`${pageId}IsIntersecting`)) {
        document.getElementById(pageId).classList.add(styles.activeLink)

        return
      }
    })
  }

  useEffect(() => {
    const referencedDivs = pageIds.map((pageId: string) => (
      document.getElementById(pageId)
    )).filter(elem => elem !== null)

    referencedDivs.forEach((referencedDiv: HTMLElement) => {
      eval(`set${referencedDiv.id[0].toUpperCase() + referencedDiv.id.slice(1)}DivRef(referencedDiv)`)
    })
  })

  return (
    <div className={`bgDark ${styles.navbar}`}>
      <ul>
        {pageIds.map((pageId: string) => (
          <a key={pageId} id={`navlink_${pageId}`} className={`${styles.navlink}${eval(pageId + 'IsIntersecting') ? ' ' + styles.activeLink : null}`} href={router.pathname === '/' || router.pathname.includes('#') ? `#${pageId}` : `/#${pageId}`} onClick={newActiveNavlink}>
            <li>
              {pageId.toUpperCase()}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}


export default Navbar
