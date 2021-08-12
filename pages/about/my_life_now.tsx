import { useEffect } from 'react'

import { MY_LIFE_NOW } from '../../assets/documents/aboutMe'

import styles from '../../styles/About.module.scss'


const MyLifeNow = () => {
  const myLifeNowString = () => {
    return Array.from('My Life Now').map((chr, i) => (
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
        {myLifeNowString()}
      </h2>

      <div dangerouslySetInnerHTML={{__html: MY_LIFE_NOW}} />
    </div>
  )
}


export default MyLifeNow
