import { useEffect } from 'react'

import { HOW_I_GOT_STARTED } from '../../assets/documents/aboutMe'

import styles from '../../styles/About.module.scss'


const HowIGotStarted = () => {
  const howIGotStartedString = () => {
    return Array.from('How I Got Started').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

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
    <div id='about' className={styles.aboutDiv}>
      <h2 className={`colorizedHeading ${styles.headingWithBreak}`}>
        {howIGotStartedString()}
      </h2>

      <div dangerouslySetInnerHTML={{__html: HOW_I_GOT_STARTED}} />
    </div>
  )
}


export default HowIGotStarted
