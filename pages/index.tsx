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

      <main className="flex flex-col items-center max-w-3xl mx-auto text-2xl text-gray-500">
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
          <TextSwitcher texts={[
            'great user experiences',
            'cool animations',
            'clean code'
          ]} />
          .
        </h2>

        <p className="mb-24 text-center">
          I love to build things that work and look good while doing so.
        </p>

        <div>
          <p>
            I started playing around with ActionScript when I was twelve. I{' '}
            <em className="italic">loved</em>{' '}
            it. I'm now twenty-five and play around with{' '}
            <TextSwitcher texts={[
              'Javascript',
              'React and Vue',
              'Ruby on Rails',
              'Elixir'
            ]} />{' '}
            for a living. And I still love it.
          </p>

          <p>
            I'm currently wroking as a software engineer for{' '}
            <TextSwitcher texts={['an innovative online school']} />.
          </p>

          <p>
            Before that,{' '}
            <TextSwitcher texts={[
              'I helped build an app for remote agile retrospectives',
              'I was project lead in an EdTech company',
              'I built a website to help my local Magic: The Gathering community',
              'I did my thesis on near-symmetrical graph drawing',
            ]} />.
          </p>

          <p>
            In my spare time I{' '}
            <TextSwitcher texts={[
              'play piano and guitar', // somehow link YouTube covers?
              "solve Rubik's cubes", // Definitely not a pro, but slowly getting my solve times lower.
              'play Age of Empires II', // and sometimes other games, but mostly Age of Empires II.
              'play boardgames',
              'travel as much as I can'
            ]} />.
          </p>

          <p>
            Drop me a line at hello@javierm42.dev.
          </p>
        </div>
      </main>
    </>
  )
}
