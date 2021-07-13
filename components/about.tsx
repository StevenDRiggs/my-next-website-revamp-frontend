import Image from 'next/image'
import { useEffect } from 'react'

import croppedProfilePic from '../assets/images/Steven_Riggs_photo_cropped.png'
import { aboutMeText } from '../assets/documents/aboutMe'

import styles from '../styles/About.module.scss'


const About = () => {
  const aboutMeString = () => {
    return Array.from('About Me').map((chr, i) => (
      chr === ' ' ?
        ' '  :
        <span key={i}>{chr}</span>
    ))
  }

  useEffect(() => {
    const headingToColorize = document.querySelectorAll('.colorizedHeading span')

    let index = Math.floor(Math.random() * (headingToColorize.length))
    while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanGreen) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanMauve)) {
      index = Math.floor(Math.random() * (headingToColorize.length))
    }
    headingToColorize[index].classList.add(styles.headingSpanGreen)

    while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanGreen) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanMauve)) {
      index = Math.floor(Math.random() * (headingToColorize.length))
    }
    headingToColorize[index].classList.add(styles.headingSpanMauve)
  })

  return (
    <div id='about' className={styles.aboutDiv}>
      <h2 className='colorizedHeading'>
        {aboutMeString()}
      </h2>

      <div className={styles.detailsDiv}>
        <div id='profilePic'>
          <Image src={croppedProfilePic} />
        </div>
        <div id='myLifeNow' className={styles.icon}>
          <i class={`fas fa-user-friends`}></i>
        </div>
        <div id='personalInterests' className={styles.icon}>
          <i class={`fas fa-gamepad`}></i>
        </div>
        <div id='howIGotStarted' className={styles.icon}>
          <i class={`fas fa-pencil-alt`}></i>
        </div>
        <div id='nextThingsToLearn' className={styles.icon}>
          <i class={`fas fa-school`}></i>
        </div>
        <div id='skills' className={styles.icon}>
          <i class={`fas fa-terminal`}></i>
        </div>
      </div>
    </div>
  )
}


export default About
