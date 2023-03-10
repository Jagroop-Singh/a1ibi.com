import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}


function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>

      {/*<Card.Eyebrow decorate>{event}</Card.Eyebrow> */}
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Jagroop Singh</title>
        <meta
          name="description"
          content="Competitions are the best way to grow your skills in CyberSecurity and Programming. These are some of the ones I've been to and highly recommmend!"
        />
      </Head>
      <SimpleLayout
        title="These are some competitions I've been to and highly recommmend!"
        intro="One of my favorite ways to grow my skills is to join competitions and working with a team of highly competitent individuals. This allows you to practice with a wide array of subjects and share what you've learned with others. I highly recommend anyone interested in CyberSecurity to join a CTF at any skill level."
      >
        <div className="space-y-20">
          <SpeakingSection title="Attack And Defense">
            <Appearance
              href="https://ncaecybergames.org"
              title="NCAE Cyber Games"
              description="Intercollegiate competition where you setup a network from ground up. Keep a selection of services up while being actively attacked by the red team."
              event="SysConf 2021"
              cta="Go to website"
            />
            <Appearance
              href="https://wrccdc.org"
              title="WRCCDC"
              description="Intercollegiate competition where you keep a set of services up as a IT team. Keep the red team from obtaining PII, and answer injects to gain more points."
              event="Business of Startups 2020"
              cta="Go to website"
            />
          </SpeakingSection>
          <SpeakingSection title="CTF">
            <Appearance
              href="https://picoctf.org"
              title="PicoCTF"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Go to website"
            />
            <Appearance
              href="https://nationalcyberleague.org"
              title="NCL"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Go to website"
            />
            <Appearance
              href="https://www.hackthebox.com"
              title="HackTheBox"
              description="Not exactly a limited time CTF, but I'd like to mention it here due to how good it is. There are a wide selection of boxes you're able to pwn. Boxes are machines that you're able to connect to through openvpn"
              // event="How They Work Radio, September 2021"
              cta="Go to website"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
