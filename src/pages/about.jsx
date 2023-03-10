import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jagroop Singh</title>
        <meta
          name="description"
          content="I'm Jagroop Singh. I program with Rust, where I fight the compiler."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Jagroop Singh. I program with Rust, where I fight the
              compiler.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've been playing with computers and programs since I was 9 years old.
                I was also subsequently hacked when I was 11 by a Wizard 101 gem generator. 
                This was the event that drew me into Cyber Security and programming, since 
                before this I had no idea that you could be hacked or that viruses existed.
                I played around with C and joined CyberPatriot during high school. I've been 
                studying CyberSecurity, and a variety of programming langauges in college.
                One of these days, I'm going to have my revenge on that Wizard 101 cheat maker.
                One of these days...
              </p>
              <p>
                The one thing that I find funner than spending my weekends on CTF's and learning ancient programming languages is playing the guitar. I've been playing for about three years, and I'm still around the level of an amateur. It's always nice to have a hobby to keep yourself grounded, since it's easy to lose track of yourself when your jumping into the deep end of technology.  
              </p>
              <p>
                To level up as a hacker and go above being a script kiddy, I've been learning to create my own tools to handle CTF challenges. Even if the program doesn't end up working, I understand the underlying logic and protocol much better. After a lot of experience in failing to create a terminal UI for network captures and analysis, I know I need to use a parser, I know where to put the listener, and I know I can do it now with enough time and motivation.
              </p>
            <p>
                My future aspirations are to get the PNPT, OSCP, and OSCE certifications to level up my game. I've had a lot of fun studying for the Security+ and Cysa+, learning more things than I thought I would've. I find certifications to be a mixed bag of feelings, on one side I don't want other people to think I'm chasing certifications, on the other side, I find that in the Cyber Security field certifications are very different. They aren't just a piece of paper, but a proof of capability and a source of knowledge. The one advice I'd give to anyone trying to learn CyberSecurity, is to go and study for the Security+. It is a mile wide and an inch deep, and gives a very broad level of knowledge on the field.
            </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/Jagroop40074241" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/0xa1ibi/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/Jagroop-Singh"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jagroop-singh-414a3316a/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jsingh8448@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jsingh8448@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
