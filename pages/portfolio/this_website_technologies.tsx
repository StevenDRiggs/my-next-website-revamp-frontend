import { useEffect } from 'react'

import { pageIds } from '../../components/navbar'

import styles from '../../styles/About.module.scss'
import styles2 from '../../styles/MobileShowPage.module.scss'
import navlinkStyles from '../../styles/Navbar.module.scss'


const ThisWebsiteTechnologies = () => {
  const technologiesUsedString = () => {
    return Array.from('Technologies Used for This Website').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

  // colorize heading
  useEffect(() => {
    const headingToColorize = document.querySelectorAll('.colorizedHeading span')

    let index = Math.floor(Math.random() * (headingToColorize.length))

    for (let i = 0; i < 2; i++) {
      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanSkyBlue)

      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanBeige)
    }
  })

  const newActiveNavlink = () => {
    const portfolioLink = document.querySelector('#navlink_portfolio')
    portfolioLink.classList.add(navlinkStyles.activeLink)
  }

  // highlights current location
  useEffect(() => {
    newActiveNavlink()
  })

  return (
    <div id='about' className={`${styles.aboutDiv} ${styles2.showPageList}`}>
      <h2 className={`colorizedHeading ${styles.headingWithBreak}`}>
        {technologiesUsedString()}
      </h2>
    </div>
  )
}


export default ThisWebsiteTechnologies
