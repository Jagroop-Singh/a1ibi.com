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
        title="My Toolbelt. There are many like it in the world, but this one is mine"
        intro="One of the hardest choices I've had to make in the beginning of my journey, was choosing which tool or program to master. Now I've built my repotoire and know what I like to use, hopefully this comes in handy for you!"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="CPU: AMD 5800X">
              Perfect CPU for running multiple virtual machines when hacking. Any usecase that requires more threads or cores, would probably be a better workload for cloud.
            </Tool>
            <Tool title="Graphics Card: Nvidia RTX 3090">
              I honestly got this for data science before realizing that I don&apos;t want to do data science. It also comes in handy for password cracking with hashcat. Gives you a leg up on the competition when you&apos;re running multiple brute force passoword attacks.
            </Tool>
            <Tool title="Keychron Q1 QMK">
              When you&apos;re typing for 80% of the day, it&apos;s probably worth investing in a good keyboard. A custom keyboard allows you to change the switches, keycaps, and height to just the way you want.
            </Tool>
            <Tool title="Ikea Markus Chair">
              A good chair is a good investment in any career where you sit on one for extended periods of time. This is a cheaper option for a comfy chair, and really helps you maintain focus for those multi hour competitions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Neovim">
              A great development environment, and it&apos;s neccessary to learn at least `vi` for CyberSecurity since that&apos;s installed by default on Linux machines.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Note Taking">
            <Tool title="CherryTree">
              Perfect to store notes during CTF&apos;s. A no-hassle setup and the nodes are perfect for organization. Not the best for longterm notes, but perfect for short-term.
            </Tool>
            <Tool title="Obsidian">
              Good for storing notes while studying. It has great features such as Internal links that let you connect notes, and a rich plugin environment.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Debugging">
            <Tool title="GDB">
              Great for debugging C applications
            </Tool>
          </ToolsSection>
          <ToolsSection title="Password Cracking">
            <Tool title="Hashcat">
              Best for attacking password hashes, utilizes the GPU for fast cracking speeds.
            </Tool>
            <Tool title="JohnTheRipper">
              Best for attacking passoword protected files. Comes with a suite of tools that can transform a file (i.e. ZIP) into a hash format that it can then crack. Great for workstations that don&apos;t have a strong or any GPU.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Web Pentesting">
            <Tool title="Burpsuite">
              Industry standard tool for web application pentesting. Creates a site map and request history while attacking. Allows caputuring attacks with a proxy, and sending the request to Intruder or other modules for attacks.
            </Tool>
            <Tool title="ZAP">
              Free alternative to Burpsuite. This doesn&apos;t rate-limit brute force attacks, but has a smaller selection of tools and modules. I don&apos;t generally use this, if you know enough scripting or have enough programming knowledge, you can create an attack on the go with a free Burpsuite subscription. 
            </Tool>
            <Tool title="Feroxbuster">
              Directory/file brute forcer, great for finding hidden folders on a web server. I run this during the beginning of an attack with nmap as part of enumeration.
            </Tool>
            <Tool title="Ffuf">
              Fuzzing tool. I use this when enumerating for vhost/dns subdomains, or when fuzzing for api parameters. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Network Pentesting">
            <Tool title="Nmap">
              Great for enumerating networks
            </Tool>
            <Tool title="Wireshark">
              Great for analyzing packet captures to scan for malicious traffic and find interesting files
            </Tool>
          </ToolsSection>
          <ToolsSection title="Stegonography">
            <Tool title="AperiiSolve">
              Online Stegonography tool to analyze png and jpeg files. Great for beginner or easy Steg challenges. More complicated challenges require a wide set of tools and knowledge to attempt to solve.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
