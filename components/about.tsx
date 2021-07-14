import Image from 'next/image'
import { useEffect } from 'react'

import type { SyntheticEvent } from 'react'

import { MY_LIFE_NOW, PERSONAL_INTERESTS, HOW_I_GOT_STARTED, NEXT_THINGS_TO_LEARN, SKILLS } from '../assets/documents/aboutMe'
import croppedProfilePic from '../assets/images/Steven_Riggs_photo_cropped.png'

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

  const showAboutText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement

    const textP = target.querySelector('p') as HTMLElement || target.parentElement.querySelector('p') as HTMLElement || target.parentElement.parentElement.querySelector('p') as HTMLElement
    const icon = target.querySelector('div.iconGroup') as HTMLElement || target.parentElement.querySelector('div.iconGroup') as HTMLElement || target.parentElement.parentElement.querySelector('div.iconGroup') as HTMLElement
    const profilePic = document.querySelector('#profilePic') as HTMLElement

    profilePic.style.opacity = '0.2'
    icon.style.opacity = '0.2'
    textP.style.visibility = 'visible'
  }

  const hideAboutText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement

    const textP = target.parentElement.querySelector('p') as HTMLElement || target.parentElement.parentElement.querySelector('p') as HTMLElement
    const icon = target.querySelector('div.iconGroup') as HTMLElement || target.parentElement.querySelector('div.iconGroup') as HTMLElement || target.parentElement.parentElement.querySelector('div.iconGroup') as HTMLElement
    const profilePic = document.querySelector('#profilePic') as HTMLElement

    textP.style.visibility = 'hidden'
    icon.style.opacity = '1.0'
    profilePic.style.opacity = '1.0'
  }

  return (
    <div id='about' className={styles.aboutDiv}>
      <h2 className='colorizedHeading'>
        {aboutMeString()}
      </h2>

      <div className={styles.detailsDiv}>
        <div id='profilePic'>
          <Image src={croppedProfilePic} />
        </div>
        <div id='myLifeNow' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText}>
          <p className={styles.aboutText}>
            {MY_LIFE_NOW}
          </p>
          <div className='iconGroup'>
            <h6>My Life Now</h6>
            <i className={`fas fa-user-friends`}></i>
          </div>
        </div>
        <div id='personalInterests' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText}>
          <p className={`${styles.aboutText} ${styles.leftText}`}>
            {PERSONAL_INTERESTS}
          </p>
          <div className='iconGroup'>
            <h6>Personal Interests</h6>
            <i className={`fas fa-gamepad`}></i>
          </div>
        </div>
        <div id='howIGotStarted' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText}>
          <p className={`${styles.aboutText} ${styles.rightText}`}>
            {HOW_I_GOT_STARTED}
          </p>
          <div className='iconGroup'>
            <h6>How I Got Started</h6>
            <i className={`fas fa-pencil-alt`}></i>
          </div>
        </div>
        <div id='nextThingsToLearn' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText}>
          <p className={styles.aboutText}>
            {NEXT_THINGS_TO_LEARN}
          </p>
          <div className='iconGroup'>
            <h6>Next Things I Want to Learn</h6>
            <i className={`fas fa-school`}></i>
          </div>
        </div>
        <div id='skills' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText}>
          <p className={styles.aboutText}>
            {SKILLS}
          </p>
          <div className='iconGroup'>
            <h6>My Skills</h6>
            <i className={`fas fa-terminal`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
