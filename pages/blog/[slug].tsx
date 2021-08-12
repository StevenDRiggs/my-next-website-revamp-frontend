import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import html2md from 'html-to-md'

import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import type { SyntheticEvent } from 'react'

import type { BlogEntry } from '../../components/blog'

import { DB_URL } from '../../assets/utils/api/dbUrl'

import styles from '../../styles/BlogEntryShowPage.module.scss'


const BlogEntryShowPage = ({ blogEntry }: { blogEntry: BlogEntry }) => {
  const [ hT, setHT ] = useState(false)
  const [ hM, setHM ] = useState(false)
  const [ hB, setHB ] = useState(false)
  const [ hC, setHC ] = useState(false)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useState()

  const [ title, setTitle ] = useState(html2md(blogEntry.title))
  const [ imageUrl, setImageUrl ] = useState(html2md(blogEntry.image_url))
  const [ content, setContent ] = useState(html2md(blogEntry.content))

  const router = useRouter()

  const resetAllH = () => {
    setHT(false)
    setHM(false)
    setHB(false)
    setHC(false)
    setUsername('')
    setPassword('')
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

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement
    eval(`set${target.name}(target.value)`)
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (token) {
      await fetch(`${DB_URL}/blog_entries/${blogEntry.slug}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          blog_entry: {
            title,
            image_url: imageUrl,
            content,
          },
        }),
      })
        .then(response => response.json())
        .then(data => router.replace(`/blog/${data.slug}`))
        .then(() => router.reload())
    } else {
      await fetch(`${DB_URL}/admin_login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      })
        .then(response => response.json())
        .then(data => setToken(data.token))
    }
  }

  const deleteBlogEntry = async () => {
    if (confirm('Are you sure you want to delete this blog entry?')) {
      await fetch(`${DB_URL}/blog_entries/${blogEntry.slug}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(() => router.replace('/#blog'))
    }
  }

  return (
    <>
      {hC && token ?
        <div className={styles.deleteBtn} onClick={deleteBlogEntry}>X</div>
        : null}
      <div className={styles.allHDiv}>
        {hC ? <div className={styles.hCDiv} onClick={resetAllH}>&#10003;</div> : null}
        <div className={styles.hDiv}>
          <div className={hT ? 'active' : null} onClick={hTClick} />
          <div className={hM ? 'active' : null} onClick={hMClick} />
          <div className={hB ? 'active' : null} onClick={hBClick} />
        </div>
      </div>

      {hC ?
        <form className={styles.blogEntryDiv} onSubmit={handleSubmit}>
          {token ?
            <>
              <input className={styles.title} type='string' name='Title' value={title} placeholder='Title' onChange={handleChange} required />
              <input className={styles.imageUrl} type='string' name='ImageUrl' value={imageUrl} placeholder='Image URL' onChange={handleChange} required />
              <textarea className={styles.contentTextArea} name='Content' value={content} onChange={handleChange} required />
              <button type='submit'>Submit Changes</button>
            </>
            :
            <>
              <input type='string' name='Username' value={username} placeholder='Username' onChange={handleChange} />
              <input type='password' name='Password' value={password} placeholder='Password' onChange={handleChange} />
              <button type='submit'>Submit</button>
            </>
          }
        </form>
        :
        <div className={styles.blogEntryDiv}>
          <figure>
            <Image src={blogEntry.image_url} width={300} height={200} />
            {blogEntry.photo_by !== 'not sourced' ? <figcaption dangerouslySetInnerHTML={{__html: blogEntry.photo_by}} /> : null}
          </figure>
          <h1>{blogEntry.title}</h1>

          <div dangerouslySetInnerHTML={{__html: blogEntry.content}} />
        </div>
      }
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
