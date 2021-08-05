import striptags from 'striptags'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import type { SyntheticEvent } from 'react'

import { DB_URL } from '../assets/utils/api/dbUrl'

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
  const [ hT, setHT ] = useState(false)
  const [ hM, setHM ] = useState(false)
  const [ hB, setHB ] = useState(false)
  const [ hC, setHC ] = useState(false)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useState()

  const [ title, setTitle ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ content, setContent ] = useState('')

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
      await fetch(`${DB_URL}/blog_entries`, {
        method: 'POST',
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
        .then(data => router.push(`/blog/${data.slug}`))
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

      {hC ?
        <form className={styles.blogDiv} onSubmit={handleSubmit}>
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
      }
    </>
  )
}


export default Blog
