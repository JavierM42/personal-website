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
              { heading: 'full stack developer' },
              { heading: 'software engineer' },
              { heading: 'human being who codes' }
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
                image: <img src="/retroally.png" />,
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
                      I did most of the frontend work on RetroAlly and picked up some UX skills by working closely with
                      the app's UX designer.
                    </p>
                    <p>
                      I still try to help out in RetroAlly whenever my main project allows it.
                    </p>
                    {/* TODO technologies with icons */}
                  </>
                )
              },
              {
                heading: 'I was a team leader in an EdTech company',
                body: (
                  <>
                    <p>
                      I worked for more than a year as an engineer for <ExternalLink href="https://emeritus.org">Emeritus</ExternalLink>,{' '}
                      where I became technical leader for their referrals program.
                    </p>
                    <p>
                      After integrating an external referrals provider as an A/B testing experiment, our three-person team migrated
                      the system with no downtime to an in-house solution.
                    </p>
                    {/* TODO technologies with icons */}
                  </>
                )
              },
              {
                heading: 'I built a website to help my local gaming community',
                body: (
                  <>
                    <p>
                      My local Magic: The Gathering community was using social media groups to trade cards, which wasn't very efficient since
                      there's no easy way to filter or sort the posts.
                    </p>
                    <p>
                      I built{' '}
                      <ExternalLink href="http://www.mtgbarato.store">a simple website</ExternalLink>{' '}
                      {/* TODO MTGBarato in english */}
                      where players can post their card inventory and wishlist for free.
                    </p>
                    <p>
                      The community loved it! They even organized a charity tournament to help pay for the server costs.
                    </p>
                    {/* TODO technologies with icons */}
                  </>
                )
              },
              {
                heading: 'I did my thesis on near-symmetrical graph drawing',
                body: (
                  <>
                    <p>
                      Based on{' '}
                      <ExternalLink href="https://www.semanticscholar.org/paper/Detecting-almost-symmetries-of-graphs-Knueven-Ostrowski/1df41d5791ffd1dbe89c291526f36c02db633db4">a paper</ExternalLink>{' '}
                      by Kneuven, Ostrowski and Pokutta, we implemented an algorithm and then a web app to automatically
                      render graphs in a symmetrical or near-symmetrical representation.
                    </p>
                    <p>
                      <ExternalLink href="https://graphsym.herokuapp.com/">GraphSym</ExternalLink> is available for free use.{' '}
                      <i className="italic">
                        Since it's hosted on a free platform, initial load times may be slow.
                      </i>
                    </p>
                  </>
                )
              },
            ]} />.
          </p>

          <p>
            In my spare time{' '}
            <TextSwitcher options={[
              {
                heading: 'I play piano and guitar',
                body: (
                  <>
                    <p>
                      Nowadays I don't play as much, but in my early 20s I even filmed some covers and posted them on YouTube.
                    </p>
                    <p>
                      Here's <ExternalLink href="https://www.youtube.com/watch?v=s9lLHWAfdAU">me playing Robot Rock by Daft Punk</ExternalLink> in 2016.
                    </p>
                  </>
                )
              },
              {
                heading: "I solve Rubik' s cubes",
                // body: (
                //   <p>
                //     My solve times are at around 45s.
                //   </p>
                // )
              },
              {
                heading: "I don't get tired of losing at videogames",
                body: (
                  <>
                    <p>
                      Well, mostly at Age of Empires II.
                    </p>
                    <p>
                      During the pandemic I reconnected with my love for digital gaming, since it's a great way to keep in touch with friends.
                    </p>
                  </>
                )
              },
              { heading: 'I play boardgames' },
              { heading: 'I travel as much as I can' }
            ]} />.
          </p>

          <p>
            Drop me a line at hello@javierm42.dev.
          </p>
        </main>
        <footer className="flex justify-center w-full space-x-2 text-sm">
          <ExternalLink href="https://www.linkedin.com/in/javierm42/">LinkedIn</ExternalLink>
          <ExternalLink href="https://github.com/JavierM42">GitHub</ExternalLink>
        </footer>
      </div>
    </>
  )
}
