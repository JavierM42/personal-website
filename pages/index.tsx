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

      <main className="mx-auto max-w-3xl flex flex-col items-center text-gray-500">
        {/* TODO change for image when we have src */}
        <div className="shadow-lg rounded-xl w-72 h-72 mt-24 mb-8" />
        <h1 className="text-5xl text-center mb-20">Hi, Javi here.</h1>
        <h2 className="text-4xl text-center leading-loose mb-20">
          I'm a{' '}
          <TextSwitcher texts={[
            'full stack developer',
            'web developer',
            'programmer',
            'human being who writes code'
          ]} />{' '}
          with a passion{' '}
          <TextSwitcher texts={['for great user experiences']} />
          .
        </h2>

        <p className="text-2xl text-center">
          I love to build things that work and look good while doing so.
        </p>
      </main>
    </>
  )
}
