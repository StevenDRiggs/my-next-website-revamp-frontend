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
        <div id='professionalInterests' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
        <div id='nonProfessionalInterests' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
        <div id='croppedProfile' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
        <div id='programmingLanguages' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
        <div id='funFacts' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
        <div id='personalInfo' className={styles.imageDiv}>
          <Image src={croppedProfilePic} alt='Steven Riggs' />
        </div>
      </div>
    </div>
  )
}


export default About
