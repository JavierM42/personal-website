import Head from 'next/head'
import TextSwitcher from '../components/TextSwitcher'

export default function Home() {
  return (
    <>
      <Head>
        <title>JavierM42</title>
        <meta name="description" content="TODO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center max-w-3xl mx-auto text-gray-500">
        {/* TODO change for image when we have src */}
        <div className="mt-24 mb-8 shadow-lg rounded-xl w-72 h-72" />
        <h1 className="mb-20 text-5xl text-center">Hi, Javi here.</h1>
        <h2 className="mb-20 text-4xl leading-loose text-center">
          I'm a{' '}
          <TextSwitcher texts={[
            'full stack engineer',
            'web developer',
            'programmer',
            'human being who writes code'
          ]} />{' '}
          with a passion for{' '}
          <TextSwitcher texts={['great user experiences', 'cool animations', 'clean code']} />
          .
        </h2>

        <p className="text-2xl text-center">
          I love to build things that work and look good while doing so.
        </p>
      </main>
    </>
  )
}
