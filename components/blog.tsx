import striptags from 'striptags'
import Link from 'next/link'

import styles from '../styles/Blog.module.scss'


export type BlogEntry = {
  id: number,
  title: string,
  content: string,
  created_at: string,
  updated_at: string,
  image_url: string,
  slug: string,
}

type BlogProps = {
  blogEntries: BlogEntry[],
}


const Blog = ({ blogEntries }: BlogProps) => {
  return (
    <div id='blog' className={styles.blogDiv}>
      <h1>Programming WTF</h1>
      <h3>When Thoughts Fracture...</h3>

      <div className={styles.blogGrid}>
        {blogEntries.sort((a, b) => a.updated_at < b.updated_at ? 1 : 0).map((blogEntry: BlogEntry) => (
          <Link href={`/blog/${blogEntry.slug}`} key={blogEntry.id}>
            <a>
              <div className={styles.blogItem}>
                <h4>{blogEntry.title}</h4>
                <img src={blogEntry.image_url} alt={blogEntry.title} />
                <p>
                  {striptags(blogEntry.content).slice(0, 75) + '...'}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default Blog
