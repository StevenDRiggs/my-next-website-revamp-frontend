import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import striptags from 'striptags'

import type { SyntheticEvent } from 'react'

import { MY_LIFE_NOW, PERSONAL_INTERESTS, HOW_I_GOT_STARTED, NEXT_THINGS_TO_LEARN, SKILLS } from '../assets/documents/aboutMe'

import styles from '../styles/About.module.scss'


const About = () => {
  const router = useRouter()

  const aboutMeString = () => {
    return Array.from('About Me').map((chr, i) => (
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

  const displaySelection = (selection: HTMLElement) => {
    const displayDiv = document.querySelector(`.${styles.selectionDisplay}`)

    let newInnerHTML

    switch (selection.id || selection.firstElementChild.id) {
      case 'whoIAm':
        newInnerHTML = '<p>Who I Am</p>'
        break
      case 'whatIDo':
        newInnerHTML = '<p>What I Do</p>'
        break
      case 'whatImGoodAt':
        newInnerHTML = "<p>What I'm Good At</p>"
        break
      case 'whatIEnjoy':
        newInnerHTML = "<p>What I Enjoy</p>"
        break
      case 'funFacts':
        newInnerHTML = "<p>Additional Fun Facts</p>"
        break
      default:
        newInnerHTML = '<p>Invalid Selection</p>'
    }

    displayDiv.innerHTML = newInnerHTML
  }

  const showText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement
    const targetId: String = target.id // || target.parentElement.id || target.parentElement.parentElement.id || target.parentElement.parentElement.parentElement.id

    displaySelection(target)
  }

  return (
    <div id='about' className={styles.aboutDiv}>
      <h2 className='colorizedHeading'>
        {aboutMeString()}
      </h2>

      <div className={styles.menuDiv}>
        <ul className={styles.menu}>
          <li className={styles.menuOption} onClick={showText}>
            <h3 id='whoIAm'>Who I Am</h3>
          </li>
          <li className={styles.menuOption} onClick={showText}>
            <h3 id='whatIDo'>What I Do</h3>
          </li>
          <li className={styles.menuOption} onClick={showText}>
            <h3 id='whatImGoodAt'>What I'm Good At</h3>
          </li>
          <li className={styles.menuOption} onClick={showText}>
            <h3 id='whatIEnjoy'>What I Enjoy</h3>
          </li>
          <li className={styles.menuOption} onClick={showText}>
            <h3 id='funFacts'>Additional Fun Facts</h3>
          </li>
        </ul>
        <div className={styles.selectionDisplay}>
        </div>
      </div>
    </div>
  )
}


export default About
