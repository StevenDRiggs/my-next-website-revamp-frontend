import { useEffect } from 'react'

import { PERSONAL_INTERESTS } from '../../assets/documents/aboutMe'

import styles from '../../styles/About.module.scss'
import styles2 from '../../styles/MobileShowPage.module.scss'


const PersonalInterests = () => {
  const personalInterestsString = () => {
    return Array.from('Personal Interests').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

  // colorize heading
  useEffect(() => {
    const headingToColorize = document.querySelectorAll('.colorizedHeading span')

    let index = Math.floor(Math.random() * (headingToColorize.length))
    while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
      index = Math.floor(Math.random() * (headingToColorize.length))
    }
    headingToColorize[index].classList.add(styles.headingSpanSkyBlue)

    while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
      index = Math.floor(Math.random() * (headingToColorize.length))
    }
    headingToColorize[index].classList.add(styles.headingSpanBeige)
  })

  return (
    <div id='about' className={`${styles.aboutDiv} ${styles2.showPageList}`}>
      <h2 className={`colorizedHeading ${styles.headingWithBreak}`}>
        {personalInterestsString()}
      </h2>

      <div dangerouslySetInnerHTML={{__html: PERSONAL_INTERESTS}} />
    </div>
  )
}


export default PersonalInterests
