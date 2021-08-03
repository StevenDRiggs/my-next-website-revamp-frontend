import Image from 'next/image'
import { useState } from 'react'

import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import type { BlogEntry } from '../../components/blog'

import { DB_URL } from '../../assets/utils/api/dbUrl'

import styles from '../../styles/BlogEntryShowPage.module.scss'


const BlogEntryShowPage = ({ blogEntry }: { blogEntry: BlogEntry }) => {
  const [ hT, setHT ] = useState(false)
  const [ hM, setHM ] = useState(false)
  const [ hB, setHB ] = useState(false)
  const [ hC, setHC ] = useState(false)

  const resetAllH = () => {
    setHT(false)
    setHM(false)
    setHB(false)
    setHC(false)
  }

  const hTClick = () => {
    if (!hT && !hM && !hB && !hC) {
      setHT(true)
    } else if (hT && hM && hB && !hC) {
      setHC(true)
    } else {
      resetAllH()
    }
  }

  const hMClick = () => {
    if (hT && !hM && hB && !hC) {
      setHM(true)
    } else {
      resetAllH()
    }
  }

  const hBClick = () => {
    if (hT && !hM && !hB && !hC) {
      setHB(true)
    } else {
      resetAllH()
    }
  }

  return (
    <>
      <div className={styles.allHDiv}>
        {hC ? <div className={styles.hCDiv} onClick={resetAllH}>&#10003;</div> : null}
        <div className={styles.hDiv}>
          <div className={hT ? 'active' : null} onClick={hTClick} />
          <div className={hM ? 'active' : null} onClick={hMClick} />
          <div className={hB ? 'active' : null} onClick={hBClick} />
        </div>
      </div>

      <div className={styles.blogEntryDiv}>
        <Image src={blogEntry.image_url} width={200} height={200} />
        <h1>{blogEntry.title}</h1>

        <div dangerouslySetInnerHTML={{__html: blogEntry.content}} />
      </div>
    </>
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
