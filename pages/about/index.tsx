import { useRouter } from 'next/router'
import { useEffect } from 'react'


const AboutIndex = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/#about')
  })

  return <div />
}


export default AboutIndex
