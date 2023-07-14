import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools - Jagroop Singh</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="My Toolbelt. A set of carefully selected options to optimize my workflow"
        intro="One of the hardest choices I've had to make in the beginning of my journey, was choosing which tool or program to master. Now I've built my repotoire and know what I like to use, hopefully this comes in handy for you!"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="CPU: AMD 5800X">
              Perfect CPU for running multiple virtual machines when hacking. Any usecase that requires more threads or cores, would probably be a better workload for cloud.
            </Tool>
            <Tool title="Graphics Card: Nvidia RTX 3090">
              A powerful GPU that comes in handy for password attacks with Hashcat, and other GPU load intensive workflows.
            </Tool>
            <Tool title="Keychron Q1 QMK">
              When you&apos;re typing for 80% of the day, it&apos;s probably worth investing in a good keyboard. A custom keyboard allows you to change the switches, keycaps, and height to just the way you want.
            </Tool>
            <Tool title="Ikea Markus Chair">
              The Markus is a great chair that is comfortable to sit in, especially when you're sitting for multiple hours every day. It's great for ergonomics, and if you want to spend a little more, a standing desk can also be a great improvement for your health.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Note Taking">
            <Tool title="CherryTree">
              Great for CTFs and fast note-taking. It works on a node system that is easy to navigate and pretty simple.
            </Tool>
            <Tool title="Obsidian">
              Great for studying and writeups. Obsidian allows you to write in markdown and has multiple plugins that come in handy.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
