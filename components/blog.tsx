import styles from '../styles/Blog.module.scss'


const Blog = () => {
  return (
    <div id='blog' className={styles.blogDiv}>
      <h1>Blog</h1>

      <div className={styles.blogGrid}>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=7' alt='Blog Image' />
          <p>Fugit a disputando....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=8' alt='Blog Image' />
          <p>Laoreet fuisset at quos ignota vix....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=9' alt='Blog Image' />
          <p>Honestatis viderer autem impedit lacus pri vulputate fuisset ultrices debitis dicat facilisis populo ea labores....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=10' alt='Blog Image' />
          <p>Sem animal et ornare percipit neque atqui eos causae donec lectus vivamus erant varius rebum....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=11' alt='Blog Image' />
          <p>Laboramus dicta putant corrumpit te utroque iisque ea aliquip integre nec....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=12' alt='Blog Image' />
          <p>Denique omnium wisi minim probatus....</p>
        </div>
        <div className={styles.blogItem}>
          <h4>Blog Entry Title</h4>
          <img src='https://picsum.photos/200?random=13' alt='Blog Image' />
          <p>Efficitur eleifend aliquet similique integer interdum vehicula o porta ornare ex mazim commodo lobortis populo?...</p>
        </div>
      </div>
    </div>
  )
}


export default Blog
