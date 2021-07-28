import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import type { BlogEntry } from '../../components/blog'

import { DB_URL } from '../../assets/utils/api/dbUrl'

import styles from '../../styles/BlogEntryShowPage.module.scss'


const BlogEntryShowPage = ({ blogEntry }: { blogEntry: BlogEntry }) => {
  return (
    <div className={styles.blogEntryDiv}>
      <h1>{blogEntry.title}</h1>

      <div dangerouslySetInnerHTML={{__html: blogEntry.content}} />
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const blogEntries: BlogEntry[] = await fetch(`${DB_URL}/blog_entries`, {
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json())

  const paths = await blogEntries.map(blogEntry => ({
    params: {
      slug: blogEntry.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const blogEntry: BlogEntry = await fetch(`${DB_URL}/blog_entries/${context.params.slug}`, {
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json())

  return {
    props: {
      blogEntry,
    },
  }
}


export default BlogEntryShowPage
