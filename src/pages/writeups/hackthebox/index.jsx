import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllWriteups } from '@/lib/getAllWriteups'

function Writeup({ writeup }) {
  return (
    <writeup className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/writeups/tryhackme/${writeup.slug}`}>
          {writeup.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={writeup.date}
          className="md:hidden"
          decorate
        >
          {formatDate(writeup.date)}
        </Card.Eyebrow>
        <Card.Description>{writeup.description}</Card.Description>
        <Card.Cta>Read writeup</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={writeup.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(writeup.date)}
      </Card.Eyebrow>
    </writeup>
  )
}

export default function WriteupsIndex({ writeups }) {
  return (
    <>
      <Head>
        <title>Writeups - Jagroop Singh</title>
        <meta
          name="description"
          content="Contains writeups of various linux/windows boxes on all dificulties. Writeups include detailed analysis of each stage of the pentesting process, and some contain custom tooling built to solve the specific box"
        />
      </Head>
      <SimpleLayout
        title="A collection of HackTheBox Writeups"
        intro="Contains writeups of various linux/windows boxes on all dificulties. Writeups include detailed analysis of each stage of the pentesting process, and some contain custom tooling built to solve the specific box"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {writeups.map((writeup) => (
              <Writeup key={writeup.slug} writeup={writeup} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      writeups: (await getAllWriteups("hackthebox")).map(({ component, ...meta }) => meta),
    },
  }
}
