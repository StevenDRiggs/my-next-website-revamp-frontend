import { useEffect } from 'react'

import type { SyntheticEvent } from 'react'

import { useAppSelector } from '../redux/hooks'

import styles from '../styles/Navbar.module.scss'


export const pageIds = [
  'top',
  'about',
  'portfolio',
  'blog',
  'contact',
]


const Navbar = () => {
  const returnEventTarget = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement

    return target
  }

  const newActiveNavlink = (target: HTMLElement) => {
    const id: string = target.id || target.parentElement.id
    const targetLink = document.querySelector(`#${id}`) as HTMLElement
    const navlinks = Array.from(document.querySelectorAll(`.${styles.navlink}`))

    navlinks.forEach(link => link.classList.remove(styles.activeLink))

    targetLink.classList.add(styles.activeLink)
  }

  const { currentPage } = useAppSelector(state => state)

  useEffect(() => {
    if (!!currentPage) {
      const target = document.querySelector(`#${currentPage}`) as HTMLElement

      newActiveNavlink(target)
    }
  })

  return (
    <div className={`bgDark ${styles.navbar}`}>
      <ul>
        <a id='navlinkHome' className={styles.navlink} href='#top' onClick={(event: SyntheticEvent) => newActiveNavlink(returnEventTarget(event))}>
          <li>
            HOME
          </li>
        </a>
        <a id='navlinkAbout' className={styles.navlink} href='#about' onClick={(event: SyntheticEvent) => newActiveNavlink(returnEventTarget(event))}>
          <li>
            ABOUT
          </li>
        </a>
        <a id='navlinkPortfolio' className={styles.navlink} href='#portfolio' onClick={(event: SyntheticEvent) => newActiveNavlink(returnEventTarget(event))}>
          <li>
            PORTFOLIO
          </li>
        </a>
        <a id='navlinkBlog' className={styles.navlink} href='#blog' onClick={(event: SyntheticEvent) => newActiveNavlink(returnEventTarget(event))}>
          <li>
            BLOG
          </li>
        </a>
        <a id='navlinkContact' className={styles.navlink} href='#contact' onClick={(event: SyntheticEvent) => newActiveNavlink(returnEventTarget(event))}>
          <li>
            CONTACT
          </li>
        </a>
      </ul>
    </div>
  )
}


export default Navbar
