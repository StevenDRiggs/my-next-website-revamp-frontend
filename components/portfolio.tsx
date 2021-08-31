import Image from 'next/image'

import profilePic from '../assets/images/Steven_Riggs_photo.jpg'
import thisWebsiteImg from '../assets/images/stevendriggs.com.png'

import styles from '../styles/Portfolio.module.scss'


const Portfolio = () => {
  return (
    <div id='portfolio' className={`${styles.portfolioDiv} bgDark`}>
      <h3><em>See my full portfolio <a href='https://github.com/StevenDRiggs' target='_blank' rel='noreferrer'>here</a></em></h3>
      <div className={styles.portfolioGrid}>
        <div className={styles.portfolioItem}>
          <h3>This Website</h3>
          <Image src={thisWebsiteImg} alt='This Website' />
          <div className={styles.projectConnections}>
            <a href='portfolio/this_website_technologies' className={styles.faIcon}>
              <img src='/images/tools-solid.svg' alt='Technologies Used' />
            </a>
            <a href='https://github.com/StevenDRiggs/my-next-website-revamp.git' className={styles.gitHubMark} target='_blank' rel='noreferrer'>
              <img src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            </a>
          </div>
        </div>
        {/*<div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=1' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>*/}
      </div>
    </div>
  )
}


export default Portfolio
