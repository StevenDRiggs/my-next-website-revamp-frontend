import type { SyntheticEvent } from 'react'

import styles from '../styles/Navbar.module.scss'


const Navbar = () => {
  const newActiveNavLink = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement

    Array.from(target.parentElement.parentElement.children).forEach(link => link.className = '')

    target.parentElement.className = styles.activeLink
  }

  return (
    <div className={`bgDark ${styles.navbar}`}>
      <ul>
        <a href='#top' onClick={newActiveNavLink}>
          <li>
            HOME
          </li>
        </a>
        <a href='#about' onClick={newActiveNavLink}>
          <li>
            ABOUT
          </li>
        </a>
        <a href='#portfolio' onClick={newActiveNavLink}>
          <li>
            PORTFOLIO
          </li>
        </a>
        <a href='#blog' onClick={newActiveNavLink}>
          <li>
            BLOG
          </li>
        </a>
        <a href='#contact' onClick={newActiveNavLink}>
          <li>
            CONTACT
          </li>
        </a>
      </ul>
    </div>
  )
}


export default Navbar
