import striptags from 'striptags'

import styles from '../styles/Blog.module.scss'


export type BlogEntry = {
  id: number,
  title: string,
  content: string,
  created_at: string,
  updated_at: string,
  image_url: string,
}

type BlogProps = {
  blogEntries: BlogEntry[],
}


const Blog = ({ blogEntries }: BlogProps) => {
  console.log(blogEntries)
  return (
    <div id='blog' className={styles.blogDiv}>
      <h1>Programming WTF</h1>
      <h3>When Thoughts Fracture...</h3>

      <div className={styles.blogGrid}>
        {blogEntries.map((blogEntry: BlogEntry) => (
          <div key={blogEntry.id} className={styles.blogItem}>
            <h4>{blogEntry.title}</h4>
            <img src={blogEntry.image_url} alt={blogEntry.title} />
            <p>
              {striptags(blogEntry.content).slice(0, 75) + '...'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Blog
