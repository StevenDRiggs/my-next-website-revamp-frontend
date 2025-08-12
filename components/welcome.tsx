import Image from 'next/image'
import { useState } from 'react'

import type { SyntheticEvent } from 'react'

import profilePic from '../assets/images/Steven_Riggs_photo.jpg'

import styles from '../styles/Welcome.module.scss'


const Welcome = () => {
  const [ hideProfilePic, setHideProfilePic ] = useState(true)
  const [ hidePopupDef, setHidePopupDef ] = useState(true)

  const toggleProfilePic = (event: SyntheticEvent) => {
    setHideProfilePic(!hideProfilePic)
  }

  const togglePopupDef = (event: SyntheticEvent) => {
    setHidePopupDef(!hidePopupDef)
  }

  return (
    <>
      <div id='home' className={`bgDark ${styles.welcomeDiv}`}>
        <h1>Hello,<br />I&apos;m <span onMouseEnter={toggleProfilePic} onMouseLeave={toggleProfilePic}>Steven</span></h1>

        <p>
          A <a href='https://www.w3schools.com/whatis/whatis_fullstack.asp' target='_blank' rel='noreferrer' onMouseEnter={togglePopupDef} onMouseLeave={togglePopupDef}>Full Stack Developer</a><br /><a className='hiddenLink' href='#about'>Here for Your Needs</a>
        </p>
      </div>

      {/* <div className={styles.imageDiv} hidden={hideProfilePic}>
        <Image src={profilePic} alt='Steven Riggs' />
        </div> FIXME: correct URL issue */}

      <div className={styles.popupDef} hidden={hidePopupDef}>
        <q cite='https://www.w3schools.com/whatis/whatis_fullstack.asp'>
          A full stack web developer is a person who can develop both client and server software.
        </q>

        <br /><br />

        <span>
          &nbsp;&nbsp;&nbsp;-- W3 Schools
        </span>
      </div>
    </>
  )
}


export default Welcome
