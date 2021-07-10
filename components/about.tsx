import Image from 'next/image'
import { useEffect } from 'react'

import profilePic from '../images/Steven_Riggs_photo.jpg'

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

      <div className={styles.imageDiv}>
        <Image src={profilePic} alt='Steven Riggs' />
      </div>

      <p>
        Fugit accumsan eget at pharetra suas duis iriure nisi eius recteque et convenire cotidieque libero! Leo mutat duo pharetra. Praesent iure duo forensibus audiam. Per bibendum erant ius facilisis eius pretium ad quodsi te auctor an. Bibendum dui moderatius primis pertinax in eleifend vulputate numquam mediocrem rutrum quaestio voluptatibus ex? Integre error ei ad habitant adhuc iuvaret massa laboramus sagittis dicant delicata efficiendi dis auctor? Felis audiam habitant lectus sapien urbanitas. Sint constituto his veniam accusam congue explicari consectetur oportere? Magna torquatos recusabo error exerci on sint libero quos.
      </p>
    </div>
  )
}


export default About
