import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { ImageCard } from '@/components/ImageCard'
import { Section } from '@/components/Section'
import { SquareLayout } from '@/components/SquareLayout'

import htbImage from '@/images/logos/logo-htb.svg'
import thmImage from '@/images/logos/tryhackme_logo_full.svg'
import picoImage from '@/images/logos/picoctf-logo-horizontal-white.svg'
import crackmeImage from '@/images/logos/crackme.svg'


function Category({title,href,image,children}){
  return(
      <ImageCard as="li" className="">
        <ImageCard.Title as="h1" href={href}>
          {title}
        </ImageCard.Title>
        <ImageCard.Image src={image} />
        <ImageCard.Description>{children}</ImageCard.Description>
        <ImageCard.Cta>See Writeups</ImageCard.Cta>
      </ImageCard>
  )
}

export default function Writeups(){
  return(
    <div>
      <Head>
        <title>Writeups - Jagroop Singh</title>
        <meta
          name="description"
          content="Writeups of Cybersecurity Challenges and Boxes"
        />
      </Head>
      <Logos/>
    </div>
  )
}

function Logos() {
   return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-2 py-8 px-8 grid grid-cols-1 gap-2 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
          <Link href="writeups/pico" className="hover:outline hover:outline-offset-2 hover:dark:outline-blue-300 hover:outline-slate-900 bg-slate-500 dark:bg-white/5 p-8 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src={picoImage}
              alt="PicoCTF"
              width={158}
              height={48}
            />
          </Link>
          <Link href="writeups/hackthebox" className="hover:outline hover:outline-offset-2 hover:dark:outline-blue-300 hover:outline-slate-900 bg-slate-500 dark:bg-white/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src={htbImage}
              alt="HackTheBox"
              width={158}
              height={48}
            />
          </Link>
          <Link href="writeups/tryhackme" className="hover:outline hover:outline-offset-2 hover:dark:outline-blue-300 hover:outline-slate-900 bg-slate-500 dark:bg-white/5 p-6 sm:p-10">
            <Image
              className="max-h-12 w-full object-contain"
              src={thmImage}
              alt="TryHackMe"
              width={158}
              height={48}
            />
          </Link>
          <Link href="writeups/crackme" className="hover:outline hover:outline-offset-2 hover:dark:outline-blue-300 hover:outline-slate-900 bg-slate-500 dark:bg-white/5 p-6 sm:p-10 grid place-content-center">
            <div className="max-h-12 w-full object-contain text-[#93c312]">
            crackmes.one
            </div>
          </Link>
        </div>
      </div>
  )
}

{/*
        // <Category title="PicoGym" href="/writeups/pico" image={picoImage}>
        //   Solving Capture the Flag challenges from PicoCTF.
        // </Category>
        // <Category title="HackTheBox" href="/writeups/hackthebox" image={htbImage}>
        //   Solving Boxes from HackTheBox
        // </Category>
        // <Category title="TryHackMe" href="writeups/tryhackme" image={thmImage}>
        //   Solving Boxes from TryHackMe
        // </Category>
        //
*/}

