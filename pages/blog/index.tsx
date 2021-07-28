import { useRouter } from 'next/router'
import { useEffect } from 'react'


const BlogIndex = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/#blog')
  })

  return <div />
}


export default BlogIndex
