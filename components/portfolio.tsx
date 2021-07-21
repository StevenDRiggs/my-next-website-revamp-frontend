import Image from 'next/image'

import profilePic from '../assets/images/Steven_Riggs_photo.jpg'

import styles from '../styles/Portfolio.module.scss'


const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.portfolioDiv}>
      <h3><em>See my full portfolio <a href='https://github.com/StevenDRiggs' target='_blank'>here</a></em></h3>
      <div className={styles.portfolioGrid}>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=1' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=2' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=3' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=4' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=5' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <h3>Project Title</h3>
          <img src='https://picsum.photos/200?random=6' alt='Project Screenshot' />
          <div className={styles.projectConnections}>
            <img className={styles.faIcon} src='/images/connectdevelop-brands.svg' alt='See it live' />
            <img className={styles.gitHubMark} src='/images/GitHub-Mark-64px.png' alt='See it on GitHub' />
            <img className={styles.youTubeIcon} src='/images/youtube_social_square_red.png' alt='See demo on YouTube' />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Portfolio
