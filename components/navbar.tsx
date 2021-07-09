import type { SyntheticEvent } from 'react'

import styles from '../styles/Navbar.module.scss'


const black = '#111'
const mauve = '#c64c9d'
const white = '#eee'


const Navbar = () => {
  const newActiveNavLink = (event: SyntheticEvent) => {
    Array.from(event.target.parentElement.parentElement.children).forEach(link => link.className = '')

    event.target.parentElement.className = 'activeLink'
  }

  return (
    <div className={`bgDark ${styles.navbar}`}>
      <ul>
        <a href='#top' onClick={newActiveNavLink}>
          <li name='home'>
            HOME
          </li>
        </a>
        <a href='#about' onClick={newActiveNavLink}>
          <li name='about'>
            ABOUT
          </li>
        </a>
        <a href='#portfolio' onClick={newActiveNavLink}>
          <li name='portfolio'>
            PORTFOLIO
          </li>
        </a>
        <a href='#blog' onClick={newActiveNavLink}>
          <li name='blog'>
            BLOG
          </li>
        </a>
        <a href='#contact' onClick={newActiveNavLink}>
          <li name='contact'>
            CONTACT
          </li>
        </a>
      </ul>
    </div>
  )
}


export default Navbar
