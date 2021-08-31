import { useRouter } from 'next/router'
import { useEffect } from 'react'


const PortfolioIndex = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/#portfolio')
  })

  return <div />
}


export default PortfolioIndex
