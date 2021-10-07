import styles from '../../styles/Xray.module.scss'


const Xray = () => {
  return (
    <div>
      <header className={styles.xrayHeader}>
        <h2>
          Personality Xray
        </h2>
        <h5>
          More about me than you may want to know
        </h5>
      </header>

      <article className={styles.xrayArticle}>
        <p>
          <em>Oxford Languages</em> defines 'normal' as:
          <br />
          <q>
            conforming to a standard; usual, typical, or expected
          </q>
        </p>

        <p>
          According to this definition, <strong>I am not 'normal'.</strong>
        </p>

        <p>
          <h3>
            I do not conform to a standard.
          </h3>
          <ul>
            <li>
              I am an out-of-the-box thinker.
            </li>
            &bull;
            <li>
              I am willing to take big risks.
            </li>
            &bull;
            <li>
              My favorite question is "Why?"
            </li>
          </ul>
        </p>

        <p>
          <h3>
            I am not usual.
          </h3>
          <ul>
            <li>
              I view the unknown as a challenge to overcome.
            </li>
          </ul>
        </p>

        <p>
          <h3>
            I am not typical.
          </h3>
          <ul>
            <li>
              I am an introvert who loves people.
            </li>
          </ul>
        </p>

        <p>
          <h3>
            I am not expected.
          </h3>
          <ul>
            <li>
              I am extremely confident in my abilities, especially my ability to learn new things quickly.
            </li>
          </ul>
        </p>

        <p>
          All that being said, there is one more thing to know about me:
          <h3>
            I am not perfect.
          </h3>
          <ul>
            <li>
              I often come across as arrogant because of my confidence.
            </li>
            &bull;
            <li>
              I hold myself and my work to a high standard, and therefore can sometimes be quite slow to produce my final results.
            </li>
            &bull;
            <li>
              I work in a train-of-thought pattern, and so may need help prioritizing tasks.
            </li>
            &bull;
            <li>
              Though I love people, and can talk for hours with someone on a one-to-one basis, I was raised to never say anthing positive about yourself, as that is arrogant. I get very uncomfortable speaking about my own strengths, and often either retreat back into the previously mentioned confidence, which makes me sound arrogant, or downplay my abilities.
            </li>
            &bull;
            <li>
              Though I am an introvert, I am very comfortable with public speaking (except when I am talking about myself).
            </li>
          </ul>
        </p>

        <p>
          You may be asking, "How can he be confident in his skills and uncomfortable talking about them?" or "How can he be an introvert and love public speaking?"
          <br />
          The answer is simple:
        </p>
        <br />
        <br />
        <p>
          <h3>
            I am human, and therefore complex.
          </h3>
        </p>
        <br />
        <br />
        <br />
      </article>
    </div>
  )
}


export default Xray
