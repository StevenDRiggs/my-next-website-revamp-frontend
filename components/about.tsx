import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import striptags from 'striptags'

import type { SyntheticEvent } from 'react'

import { MY_LIFE_NOW, PERSONAL_INTERESTS, HOW_I_GOT_STARTED, NEXT_THINGS_TO_LEARN, SKILLS } from '../assets/documents/aboutMe'
import croppedProfilePic from '../assets/images/Steven_Riggs_photo_cropped.png'

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

  const showAboutText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement
    const targetId: String = target.id || target.parentElement.id || target.parentElement.parentElement.id || target.parentElement.parentElement.parentElement.id

    const textDiv = document.querySelector(`div[data-name=${targetId}]`) as HTMLElement
    const icon = document.querySelector(`div#${targetId} .iconGroup`) as HTMLElement
    const hiderBlock = document.querySelector('#hiderBlock') as HTMLElement

    hiderBlock.style.zIndex = '1'
    icon.style.opacity = '0.5'
    textDiv.style.visibility = 'visible'
  }

  const hideAboutText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement
    const targetId: String = target.id || target.parentElement.id || target.parentElement.parentElement.id

    const textDivs = Array.from(document.querySelectorAll(`div[data-name]`)) as HTMLElement[]
    const icons = Array.from(document.querySelectorAll(`div.iconGroup`)) as HTMLElement[]
    const hiderBlock = document.querySelector('#hiderBlock') as HTMLElement

    textDivs.forEach(textDiv => textDiv.style.visibility = 'hidden')
    icons.forEach(icon => icon.style.opacity = '1.0')
    hiderBlock.style.zIndex = '-1'
  }

  const clickLongText = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement
    const urlStub = target.parentElement.parentElement.dataset.url || target.parentElement.parentElement.parentElement.dataset.url

    router.push(`/about/${urlStub}`)
  }

  return (
    <div id='about' className={styles.aboutDiv}>
      <h2 className='colorizedHeading'>
        {aboutMeString()}
      </h2>

      <Link href='/about/xray'>
        <p className={styles.xrayInsert}>
          Want to know more?
          <br />
          Check out my <a className={styles.techLink}>Personality Xray</a>
        </p>
      </Link>

      <div className={styles.detailsDiv}>
        <div id='profilePic'>
          <div id='hiderBlock' className={styles.hiderBlock} />
          <Image src={croppedProfilePic} alt="" />
          <div data-name='myLifeNow' className={styles.aboutText} dangerouslySetInnerHTML={{__html: `<p class="${styles.largeAboutText}">${striptags(MY_LIFE_NOW).slice(0, 300)}...</p>`}} />
          <div data-name='personalInterests' className={styles.aboutText} dangerouslySetInnerHTML={{__html: PERSONAL_INTERESTS}} />
          <div data-name='howIGotStarted' className={styles.aboutText} dangerouslySetInnerHTML={{__html: `<p class=${styles.largeAboutText}>${striptags(HOW_I_GOT_STARTED).slice(0, 300)}...</p>`}} />
          <div data-name='nextThingsToLearn' className={styles.aboutText} dangerouslySetInnerHTML={{__html: NEXT_THINGS_TO_LEARN}} />
          <div data-name='skills' className={styles.aboutText} dangerouslySetInnerHTML={{__html: `<p class="${styles.largeAboutText}">${striptags(SKILLS).slice(0, 1500)}...</p>`}} />
        </div>

        <div id='myLifeNow' data-url='my_life_now' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText} onClick={clickLongText}>
          <div className='iconGroup'>
            <h6>My Life Now</h6>
            <i className={`fas fa-user-friends`}></i>
          </div>
        </div>
        <div id='personalInterests' data-url='personal_interests' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText} onTouchStart={clickLongText}>
          <div className='iconGroup'>
            <h6>Personal Interests</h6>
            <i className={`fas fa-gamepad`}></i>
          </div>
        </div>
        <div id='howIGotStarted' data-url='how_i_got_started' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText} onClick={clickLongText}>
          <div className='iconGroup'>
            <h6>How I Got Started</h6>
            <i className={`fas fa-pencil-alt`}></i>
          </div>
        </div>
        <div id='nextThingsToLearn' data-url='next_things_to_learn' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText} onTouchStart={clickLongText}>
          <div className='iconGroup'>
            <h6>Next Things I Want to Learn</h6>
            <i className={`fas fa-school`}></i>
          </div>
        </div>
        <div id='skills' data-url='skills' className={styles.icon} onMouseEnter={showAboutText} onMouseLeave={hideAboutText} onClick={clickLongText}>
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
