import { useEffect } from 'react'

import type { SyntheticEvent } from 'react'

import styles from '../styles/Contact.module.scss'


const Contact = () => {
  const contactHeadingString = () => {
    return Array.from('Like what you see? Send me a line!').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  useEffect(() => {
    for (let i in [...Array(2)]) {
      const headingToColorize = document.querySelectorAll('.colorizedHeading2 span')

      let index = Math.floor(Math.random() * (headingToColorize.length))
      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanSkyBlue)

      while (Array.from(headingToColorize[index].classList).includes(styles.headingSpanSkyBlue) || Array.from(headingToColorize[index].classList).includes(styles.headingSpanBeige)) {
        index = Math.floor(Math.random() * (headingToColorize.length))
      }
      headingToColorize[index].classList.add(styles.headingSpanBeige)
    }
  })

  return (
    <div id='contact' className={`bgDark ${styles.contactDiv}`}>
      <h1 className='colorizedHeading2'>
        {contactHeadingString()}
      </h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor='name'>What's your name?</label>
        <input type='text' id='name' className={styles.formInput} placeholder='Name' required />

        <label htmlFor='email'>How do I reach you?</label>
        <input type='email' id='email' className={styles.formInput} placeholder='Email' required />

        <label htmlFor='message'>What would you like to say?</label>
        <textarea id='message' className={styles.formInput} required />

        <button type='submit' className={styles.formSubmitBtn}>Send it!</button>
      </form>
    </div>
  )
}


export default Contact
