import Head from 'next/head'
import TextSwitcher from '../components/TextSwitcher'
import ExternalLink from '../components/ExternalLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>JavierM42</title>
        <meta name="description" content="TODO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center max-w-3xl mx-auto text-2xl leading-loose text-gray-500">
        {/* TODO change for image when we have src */}
        <div className="mt-24 mb-8 shadow-lg rounded-xl w-72 h-72" />
        <h1 className="mb-20 text-5xl text-center">Hi, Javi here.</h1>
        <h2 className="mb-20 text-4xl leading-loose text-center">
          I'm a{' '}
          <TextSwitcher
            size="4xl"
            options={[
              { heading: 'full stack engineer' },
              { heading: 'web developer' },
              { heading: 'programmer' },
              { heading: 'human being who writes code' }
            ]}
          />{' '}
          with a passion for{' '}
          <TextSwitcher
            size="4xl"
              options={[
              { heading: 'great user experiences' },
              { heading: 'cool animations' },
              { heading: 'clean code' }
            ]}
          />
          .
        </h2>

        <p className="mb-24 text-center">
          I love to build things that{' '}
          <strong className="font-semibold">work</strong>{' '}
          <em className="italic">and</em>{' '}
          <strong className="font-semibold">look good</strong>{' '}
          while doing so.
        </p>

        <main className="mb-64 space-y-8">
          <p>
            I started playing around with ActionScript when I was twelve. I{' '}
            <em className="italic">loved</em>{' '}
            it. I'm now twenty-five and play around with{' '}
            <TextSwitcher options={[
              { heading: 'Javascript' },
              { heading: 'React and Vue' },
              { heading: 'Ruby on Rails' },
              { heading: 'Elixir' }
            ]} />{' '}
            for a living. And I still love it.
          </p>

          <p>
            I'm currently working as a software engineer for{' '}
            <TextSwitcher options={[{
              heading: 'an innovative online school',
              body: (
                <p>
                  <ExternalLink href="https://joinprisma.com">Prisma</ExternalLink>{' '}
                  is an online school for kids aged 4-8...
                  {/* TODO write real text */}
                </p>
              )
            }]} />.
          </p>

          <p>
            Before that,{' '}
            <TextSwitcher options={[
              {
                heading: 'I helped build a web app for remote agile retrospectives',
                body: (
                  <>
                    <p>
                      <ExternalLink href="https://retroally.com">RetroAlly</ExternalLink>{' '}
                      guides retrospectives, which can be a challenge when there isn't an expert moderator around.
                    </p>
                    <p>
                      Born as an internal company project at{' '}
                      <ExternalLink href="https://wyeworks.com">Wyeworks</ExternalLink>
                      , it's now becoming an actual product.
                    </p>
                    <p>
                      I did most of the frontend implementation on RetroAlly and picked up some UX skills by working closely with the app's UX designer. I still try to help out in RetroAlly whenever my main project allows it.
                    </p>
                  </>
                )
              },
              { heading: 'I was a team leader in an EdTech company' },
              { heading: 'I built a website to help my local Magic: The Gathering community' },
              { heading: 'I did my thesis on near-symmetrical graph drawing' },
            ]} />.
          </p>

          <p>
            In my spare time I{' '}
            <TextSwitcher options={[
              { heading: 'play piano and guitar' }, // somehow link YouTube covers?
              { heading: "solve Rubik' s cubes" }, // Definitely not a pro, but slowly getting my solve times lower.
              { heading: 'play Age of Empires II' }, // and sometimes other games, but mostly Age of Empires II.
              { heading: 'play boardgames' },
              { heading: 'travel as much as I can' }
            ]} />.
          </p>

          <p>
            Drop me a line at hello@javierm42.dev.
          </p>
        </main>
      </div>
    </>
  )
}
