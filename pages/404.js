import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <>
    <Head>
      <title>Ninja List | 404</title>
      <meta name="keywords" content="net ninjas" />
    </Head>
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Going back to the <Link href="/"><a>home page</a></Link> in 3 seconds...
      </p>
    </div>
    </>
  );
}

export default NotFound;