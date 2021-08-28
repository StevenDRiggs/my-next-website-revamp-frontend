import { useEffect, useState } from 'react'

import type { SyntheticEvent } from 'react'

import { DB_URL } from '../assets/utils/api/dbUrl'

import styles from '../styles/Contact.module.scss'


const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const contactHeadingString = () => {
    return Array.from('Like what you see? Send me a line!').map((chr, i) => (
      chr === ' ' ?
      ' '  :
      <span key={i}>{chr}</span>
    ))
  }

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement

    eval(`set${target.name}(\`${target.value}\`)`)
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    await fetch(`${DB_URL}/contact`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          name,
          email,
          message,
        },
      }),
    })
      .then(response => response.json())
      .then(data => alert(`Thank you, ${data.name}! I will contact you at ${data.email} soon!`))

    setName('')
    setEmail('')
    setMessage('')
  }

  const handleTextAreaInput = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement

    (target.parentNode as HTMLElement).dataset.replicatedValue = target.value
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
  }, [])

  return (
    <div id='contact' className={`bgDark ${styles.contactDiv}`}>
      <h1 className={`colorizedHeading2 ${styles.colorizedHeading}`}>
        {contactHeadingString()}
      </h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor='name'>What&apos;s your name?</label>
        <input type='text' id='name' name='Name' className={styles.formInput} value={name} placeholder='Name' onChange={handleChange} required />

        <label htmlFor='email'>How do I reach you?</label>
        <input type='email' id='email' name='Email' className={styles.formInput} value={email} placeholder='Email' onChange={handleChange} required />

        <label htmlFor='message'>What would you like to say?</label>
        <div className={styles.growWrap}>
          <textarea id='message' name='Message' className={styles.formInput} value={message} onChange={handleChange} onInput={handleTextAreaInput} required />
        </div>

        <button type='submit' className={styles.formSubmitBtn}>Send it!</button>
      </form>
    </div>
  )
}


export default Contact
